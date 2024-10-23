import { Request, Response } from 'express';
import lojaService from '../services/lojaService';
import catchAsync from '../utils/catchAsync';

export const createLoja = catchAsync(async (req: Request, res: Response) => {
  const lojaData = req.body;
  const newLoja = await lojaService.createLoja(lojaData);
  await newLoja.save();
  res.status(201).json(newLoja);
});

export const encontrarLojasNoRaio100 = catchAsync(
  async (req: Request, res: Response) => {
    const { cep } = req.params;

    const lojas = await lojaService.encontrarLojasNoRaio100(cep);

    // Verifica se há lojas encontradas
    if (lojas.length > 0) {
      res.status(200).json(lojas);
    }
    // Se não houver lojas encontradas, retorna 204
    else {
      res.status(200).json({ message: 'Nenhuma loja encontrada' });
    }
  },
);

export default { createLoja, encontrarLojasNoRaio100 };
