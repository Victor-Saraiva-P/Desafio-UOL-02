import Loja from '../models/lojaModel';
import { obterEnderecoViaCep } from '../utils/viaCep';
import { obterCoordenadasPorEndereco } from '../utils/geocodingGoogle';
import AppError from '../utils/appError';
import checarCep from '../utils/checaCep';
import logger from '../utils/logger';

interface LojaInput {
  nome: string;
  numero: string;
  segmento: string;
  cep: string | number;
}

export const createLoja = async (lojaData: LojaInput) => {
  const { nome, numero, segmento, cep } = lojaData;

  // Verifica se os campos obrigatórios foram fornecidos
  const camposObrigatorios = ['nome', 'numero', 'segmento', 'cep'];
  const camposFaltando = camposObrigatorios.filter(
    (campo) => !lojaData[campo as keyof LojaInput],
  );

  if (camposFaltando.length > 0) {
    throw new AppError(
      `Campos obrigatórios não fornecidos: ${camposFaltando.join(', ')}`,
      400,
    );
  }

  // Verifica se o CEP é válido
  const cepChecado = checarCep(cep);

  // Busca o endereço utilizando o ViaCEP
  const endereco = await obterEnderecoViaCep(cepChecado);

  // Obtém as coordenadas do endereço
  const coordenadas = await obterCoordenadasPorEndereco(
    endereco.logradouro,
    endereco.bairro,
    endereco.cidade,
    endereco.estado,
    numero,
  );
  const { latitude, longitude } = coordenadas;

  // Cria a nova loja com o campo de localização
  const newLoja = await Loja.create({
    nome,
    numero,
    segmento,
    cep: cepChecado,
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
  // Verifica se o CEP é válido
  const cepChecado = checarCep(cep);

  // obtem endereço do CEP usando a API do ViaCEP
  const enderecoProcurar = await obterEnderecoViaCep(cepChecado);
  logger.info(
    `Endereço encontrado para o CEP ${cepChecado}: ${enderecoProcurar.logradouro}, ${enderecoProcurar.bairro}, ${enderecoProcurar.cidade}, ${enderecoProcurar.estado}`,
  );

  // Obtém as coordenadas do endereço usando a API do Google
  const coordenadas = await obterCoordenadasPorEndereco(
    enderecoProcurar.logradouro,
    enderecoProcurar.bairro,
    enderecoProcurar.cidade,
    enderecoProcurar.estado,
  );

  logger.info(
    `Coordenadas encontradas para o endereço: ${coordenadas.latitude}, ${coordenadas.longitude}`,
  );
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
