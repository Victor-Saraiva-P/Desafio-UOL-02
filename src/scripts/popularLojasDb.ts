import mongoose from 'mongoose';
import Loja from '../models/lojaModel';
import { createLoja } from '../services/lojaService';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });


// Pegando variaveis do arquivo .env
// const mongoDbUri = process.env.DATABASE || '';
// const mongDbPassword = process.env.DATABASE_PASSWORD || '';

// Criando link de conexão com o banco de dados
const DB =
  'mongodb+srv://victoralex07062005:fTaNowmO3YvHicwD@lojasdb.zy3lg.mongodb.net/lojasCollection?retryWrites=true&w=majority&appName=LojasDB';

// Conectando ao banco de dados
mongoose
  .connect(DB)
  .then(() => {
    populateDatabase();
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Função para povoar o banco de dados
const populateDatabase = async () => {
  try {
    // Dados fictícios de lojas
    const lojas = [
      {
        nome: 'Loja São Paulo',
        cep: '02675-001',
        segmento: 'Farmácia',
        numero: '1',
      },
      {
        nome: 'Loja Rio de Janeiro',
        cep: '20031001',
        segmento: 'Mercado',
        numero: '2',
      },
      {
        nome: 'Loja Curitiba',
        cep: '80010000',
        segmento: 'Padaria',
        numero: '3',
      },
      {
        nome: 'Loja Garanhuns',
        cep: '55291-010',
        segmento: 'Restaurante',
        numero: '4',
      },
    ];

    // Remover lojas existentes
    await Loja.deleteMany();

    // Inserir novas lojas com dados completos de endereço
    for (const loja of lojas) {
      await createLoja(loja);
    }

    console.log('Banco de dados populado com sucesso!');
  } catch (error) {
    console.error('Erro ao povoar o banco de dados:', error);
  } finally {
    process.exit(); // Sempre finaliza o processo, independente do sucesso ou falha
  }
};
