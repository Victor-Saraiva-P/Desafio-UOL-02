import { createLoja } from '../services/lojaService';
import AppError from '../utils/appError';

interface LojaTestInput {
  nome: string;
  numero: string;
  segmento: string;
  cep: string;
}

describe('Validação de Criação de Loja', () => {
  it('Deve lançar um erro se campos obrigatórios não forem fornecidos', async () => {
    const lojaInvalida: LojaTestInput = {
      nome: '',
      numero: '',
      segmento: '',
      cep: '',
    };

    await expect(createLoja(lojaInvalida as LojaTestInput)).rejects.toThrow(
      AppError,
    );
  });

  it('Deve lançar um erro se o CEP for inválido (exemplo: 00000-000)', async () => {
    const lojaInvalida: LojaTestInput = {
      nome: 'Loja Teste',
      numero: '123',
      segmento: 'Tecnologia',
      cep: '00000-000',
    };

    await expect(createLoja(lojaInvalida as LojaTestInput)).rejects.toThrow(
      AppError,
    );
  });
});

describe('Validação do CEP para busca de lojas próximas', () => {
  it('Deve lançar um erro se o CEP fornecido for inválido (exemplo: 99999-999)', async () => {
    const lojaInvalida: LojaTestInput = {
      nome: 'Loja Teste',
      numero: '123',
      segmento: 'Tecnologia',
      cep: '99999-999',
    };

    await expect(createLoja(lojaInvalida as LojaTestInput)).rejects.toThrow(
      AppError,
    );
  });
});
