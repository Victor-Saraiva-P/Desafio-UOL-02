import axios from 'axios';
import AppError from '../utils/appError';

// Interface que representa os dados retornados pela API ViaCEP
interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  cep: string;
  erro?: boolean;
}

// Função para obter dados de endereço pelo CEP usando a API ViaCEP
export const obterEnderecoViaCep = async (cep: string) => {
  const response = await axios.get<Endereco>(
    `https://viacep.com.br/ws/${cep}/json/`,
  );
  if (response.data.erro) {
    throw new AppError('CEP não encontrado', 404);
  }
  const { logradouro, bairro, localidade: cidade, uf: estado } = response.data;
  return {
    logradouro,
    bairro,
    cidade,
    estado,
    cep,
  };
};
