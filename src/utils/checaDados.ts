import AppError from './appError';

export const checarCep = (cep: string | number) => {
  // verifica se o cep é uma string, senão o converte
  if (typeof cep !== 'string') {
    cep = cep.toString();
  }

  // formata o cep para padronizar: de 12345-678 para 12345678
  const cepFormatado = cep.replace('-', '');

  // verifica se o cep contém apenas números
  if (!/^\d+$/.test(cepFormatado)) {
    throw new AppError('O CEP deve conter apenas números', 400);
  }

  // verifica se o cep tem tamanho válido
  if (cepFormatado.length !== 8) {
    throw new AppError('Por favor insira um cep de tamanho válido', 400);
  }

  return cepFormatado;
};

export const checaId = (id: string) => {
  // verifica se o id tem um tamanho diferente do esperado
  if (id.length !== 24) {
    throw new AppError('ID inválido', 400);
  }
};

export default { checarCep, checaId };
