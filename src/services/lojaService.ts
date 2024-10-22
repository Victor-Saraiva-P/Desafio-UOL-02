import Loja from '../models/lojaModel';
import { obterEnderecoViaCep } from '../utils/viaCep';
import { obterCoordenadasViaCep } from '../utils/geocodingGoogle';
import { formulaHaversine } from '../utils/haversineFormula';

interface LojaInput {
  nome: string;
  numero: string;
  segmento: string;
  cep: string;
}

export const createLoja = async (lojaData: LojaInput) => {
  const { nome, numero, segmento, cep } = lojaData;

  // Busca o endereço utilizando o ViaCEP
  const endereco = await obterEnderecoViaCep(cep);

  // Obtém as coordenadas do endereço
  const coordenadas = await obterCoordenadasViaCep(cep);

  // Cria a nova loja
  const newLoja = await Loja.create({
    nome,
    numero,
    segmento,
    cep,
    logradouro: endereco.logradouro,
    bairro: endereco.bairro,
    cidade: endereco.cidade,
    estado: endereco.estado,
    latitude: coordenadas.latitude,
    longitude: coordenadas.longitude,
  });

  return newLoja;
};

// encontra lojas próximas num raio de 100km
export const encontrarLojasNoRaio100 = async (cep: string) => {
  // Obtém as coordenadas do CEP usando a API do Google
  const coordenadaProcurar = await obterCoordenadasViaCep(cep);

  // Busca todas as lojas que possuem coordenadas
  const lojas = await Loja.find();

  const lojasNoRaio = lojas.filter((loja) => {
    // Se a loja não tiver coordenadas, não é possível calcular a distância
    if (loja.latitude === undefined || loja.longitude === undefined)
      return false;

    const coordenadasLoja = {
      latitude: loja.latitude,
      longitude: loja.longitude,
    };

    const distancia = formulaHaversine(coordenadaProcurar, coordenadasLoja);
    return distancia <= 100; // Limite de distância em 100 km
  });

  return lojasNoRaio;
};

export default { createLoja, encontrarLojasNoRaio100 };
