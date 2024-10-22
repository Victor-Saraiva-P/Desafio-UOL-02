import Loja from '../models/lojaModel';
import { obterEnderecoViaCep } from '../utils/viaCep';
import { obterCoordenadasViaCep } from '../utils/geocodingGoogle';

interface LojaInput {
  nome: string;
  numero: string;
  segmento: string;
  cep: string;
}

export const createLoja = async (lojaData: LojaInput) => {
  const { nome, numero, segmento, cep } = lojaData;

  // formata o cep para padronizar
  const cepFormatado = cep.replace('-', '');

  // Busca o endereço utilizando o ViaCEP
  const endereco = await obterEnderecoViaCep(cep);

  // Obtém as coordenadas do endereço
  const coordenadas = await obterCoordenadasViaCep(cep);
  const { latitude, longitude } = coordenadas;

  // Cria a nova loja com o campo de localização
  const newLoja = await Loja.create({
    nome,
    numero,
    segmento,
    cep: cepFormatado,
    logradouro: endereco.logradouro,
    bairro: endereco.bairro,
    cidade: endereco.cidade,
    estado: endereco.estado,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude],
    },
  });

  return newLoja;
};

// encontra lojas próximas num raio de 100km
export const encontrarLojasNoRaio100 = async (cep: string) => {
  // Obtém as coordenadas do CEP usando a API do Google
  const coordenadas = await obterCoordenadasViaCep(cep);
  const { latitude, longitude } = coordenadas;

  // Busca lojas dentro de um raio de 100 km usando agregação e $geoNear
  const lojasNoRaio = await Loja.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
        distanceField: 'distanciaCalculada',
        maxDistance: 100 * 1000, // 100 km em metros
        spherical: true,
      },
    },
    {
      $project: {
        nome: 1,
        segmento: 1,
        numero: 1,
        logradouro: 1,
        bairro: 1,
        cidade: 1,
        estado: 1,
        cep: 1,
        distanciaCalculada: {
          $round: [{ $divide: ['$distanciaCalculada', 1000] }, 2], // Convertendo para km e arredondando para duas casas decimais
        },
      },
    },
    {
      $sort: { distanciaCalculada: 1 },
    },
  ]);

  return lojasNoRaio;
};

export default { createLoja, encontrarLojasNoRaio100 };
