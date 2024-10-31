import app from './app';
import mongoose from 'mongoose';
import logger from './utils/logger';

// Pegando variaveis do arquivo .env
const mongoDbUrl = process.env.DATABASE || '';
const mongDbPassword = process.env.DATABASE_PASSWORD || '';
const PORT = process.env.PORT || 3000;

if (!mongoDbUrl || !mongDbPassword) {
  logger.error('Variáveis de ambiente não definidas!');
  process.exit(1);
}

// Criando link de conexão com o banco de dados
const DB = mongoDbUrl.replace('<db_password>', mongDbPassword);

// Conectando ao banco de dados
mongoose
  .connect(DB)
  .then(() => {
    logger.info('DB Conectado!');
    app.listen(PORT, () => {
      logger.info(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('Erro ao conectar ao banco de dados:', err);
  });
