import app from './app';
import mongoose from 'mongoose';

// Pegando variaveis do arquivo .env
const mongoDbUri = process.env.DATABASE || '';
const mongDbPassword = process.env.DATABASE_PASSWORD || '';
const PORT = process.env.PORT || 3000;

// Criando link de conexão com o banco de dados
const DB = mongoDbUri.replace('<db_password>', mongDbPassword);

// Conectando ao banco de dados
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB Conectado!');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
