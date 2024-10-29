import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

const mongoDbUri = process.env.DATABASE || '';
const mongDbPassword = process.env.DATABASE_PASSWORD || '';

// Criando link de conexão com o banco de dados
const DB = mongoDbUri.replace('<db_password>', mongDbPassword);

beforeAll(async () => {
  await mongoose.connect(DB);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Testes de Integração para Lojas', () => {
  it('Deve criar uma nova loja e retornar 201', async () => {
    const novaLoja = {
      nome: 'Loja Teste',
      numero: '123',
      segmento: 'Tecnologia',
      cep: '55038655', // cep valido da cidade de garanhuns
    };

    const response = await request(app).post('/api/lojas').send(novaLoja);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('nome', 'Loja Teste');
  });
});
