import express from 'express';
import lojaRoutes from './routes/lojaRoutes';
import errorHandler from './middleware/errorHandler';
import AppError from './utils/appError';
import requestLogger from './middleware/requestLogger';

// Inicializar o Express
const app = express();

// Middleware para log de requisições
app.use(requestLogger);

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rotas
app.use('/api/lojas', lojaRoutes);

// Erro de rota não existente
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Não foi possível encontrar ${req.originalUrl} neste servidor!`,
      404,
    ),
  );
});

// Middleware de erro
app.use(errorHandler);

// Exportar a aplicação configurada
export default app;
