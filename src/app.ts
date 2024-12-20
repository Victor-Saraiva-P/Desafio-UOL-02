// @ts-expect-error: Módulo 'xss-clean' não possui declaração de tipos
import xss from 'xss-clean';
import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import lojaRoutes from './routes/lojaRoutes';
import errorHandler from './middleware/errorHandler';
import AppError from './utils/appError';
import requestLogger from './middleware/requestLogger';
import swaggerSpec from './config/swagger';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

// Configuração do dotenv
dotenv.config({ path: './config.env' });

// Inicializar o Express
const app = express();

// Middleware para log de requisições
app.use(requestLogger);

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Middleware para sanitizar dados contra injeção de MongoDB
app.use(mongoSanitize());

// Middleware para sanitizar contra XSS
app.use(xss());

// Rotas
app.use('/api/lojas', lojaRoutes);

// Rota para a documentação Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
