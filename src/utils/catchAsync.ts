import { Request, Response, NextFunction } from 'express';

// Função de ordem superior que recebe uma função assíncrona como argumento
const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) => {
  // Retorna uma nova função que será usada como middleware no Express
  return (req: Request, res: Response, next: NextFunction) => {
    // Executa a função assíncrona e, se ocorrer um erro, passa o erro para o próximo middleware de erro
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
