import mongoose from 'mongoose';
import Loja from '../models/lojaModel';
import { createLoja } from '../services/lojaService';
import dotenv from 'dotenv';
import lojaData from './lojaData';
import logger from '../utils/logger';

dotenv.config({ path: './config.env' });

// Pegando variaveis do arquivo .env
const mongoDbUri = process.env.DATABASE || '';
const mongDbPassword = process.env.DATABASE_PASSWORD || '';

// Criando link de conexão com o banco de dados
const DB = mongoDbUri.replace('<db_password>', mongDbPassword) || '';

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
    const lojas = lojaData;

    // Remover lojas existentes
    await Loja.deleteMany();

    // Inserir novas lojas com dados completos de endereço
    for (const loja of lojas) {
      logger.info(`Criando loja: ${loja.nome}, Endereço: ${loja.cep}`);

      await createLoja(loja);
    }

    console.log('Banco de dados populado com sucesso!');
  } catch (error) {
    console.error('Erro ao povoar o banco de dados:', error);
  } finally {
    process.exit(); // Sempre finaliza o processo, independente do sucesso ou falha
  }
};
