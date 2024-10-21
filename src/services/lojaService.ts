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

export default { createLoja };
