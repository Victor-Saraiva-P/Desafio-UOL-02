import { Request, Response } from 'express';
import lojaService from '../services/lojaService';

export const createLoja = async (req: Request, res: Response) => {
  try {
    const lojaData = req.body;
    const newLoja = await lojaService.createLoja(lojaData);
    await newLoja.save();
    res.status(201).json(newLoja);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Um erro insperado ocorreu' });
    }
  }
};

export const encontrarLojasNoRaio100 = async (req: Request, res: Response) => {
  try {
    const { cep } = req.params;
    const lojas = await lojaService.encontrarLojasNoRaio100(cep);

    if (lojas.length > 0) {
      res.status(200).json(lojas);
    } else {
      res.status(404).json({ message: 'Nenhuma loja encontrada' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Um erro insperado ocorreu' });
    }
  }
};

export default { createLoja, encontrarLojasNoRaio100 };
