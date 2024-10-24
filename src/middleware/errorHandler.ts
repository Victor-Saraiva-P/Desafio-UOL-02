import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
import logger from '../utils/logger';

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Definir status e mensagem de erro
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  // Logar o erro
  logger.error({
    message: err.message,
    status: status,
    statusCode: statusCode,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });

  // Desenvolvimento: erro completo
  if (process.env.ENV === 'development') {
    res.status(statusCode).json({
      status: status,
      error: err,
      message: err.message,
      stack: err.stack,
    });

    // Produção: erro operacional
  } else if (process.env.ENV === 'production') {
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: status,
        message: err.message,
      });
    } else {
      // Mensagem genérica para erros não operacionais
      res.status(500).json({
        status: 'error',
        message: 'Algo deu errado!',
      });
    }
  }
};

export default errorHandler;
