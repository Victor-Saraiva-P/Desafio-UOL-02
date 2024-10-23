import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Definir status e mensagem de erro
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  // Desenvolvimento: erro completo
  if (process.env.ENV === 'development') {
    console.error('ERROR 💥', err);
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
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Algo deu errado!',
      });
    }
  }
};

export default errorHandler;
