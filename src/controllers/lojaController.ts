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
      res
        .status(404)
        .json({ message: 'Nenhuma loja encontrada no raio de 100 Km' });
    }
  },
);

export const getLojas = catchAsync(async (req: Request, res: Response) => {
  const lojas = await lojaService.getLojas();
  res.status(200).json(lojas);
});

export const deleteLojaById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    await lojaService.deleteLojaById(id);
    res.status(204).send();
  },
);

export default {
  createLoja,
  encontrarLojasNoRaio100,
  getLojas,
  deleteLojaById,
};
