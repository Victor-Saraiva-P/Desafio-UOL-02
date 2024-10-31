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
      telefone: '(87) 99999-9999',
      horarioFuncionamento: {
        segunda: { abre: '08:00', fecha: '18:00' },
        terca: { abre: '08:00', fecha: '18:00' },
        quarta: { abre: '08:00', fecha: '18:00' },
        quinta: { abre: '08:00', fecha: '18:00' },
        sexta: { abre: '08:00', fecha: '18:00' },
        sabado: { abre: '08:00', fecha: '12:00' },
        domingo: { abre: '08:00', fecha: '12:00' },
      },
    };

    const response = await request(app).post('/api/lojas').send(novaLoja);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('nome', 'Loja Teste');

    // Guarda o id da loja para deletar
    const id = response.body._id;
    await request(app).delete(`/api/lojas/${id}`);
  });
});
