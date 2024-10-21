import { Request, Response } from 'express';
import lojaService from '../services/lojaService';

export const createLoja = async (req: Request, res: Response) => {
  try {
    const lojaData = req.body;
    const newLoja = await lojaService.createStore(lojaData);
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

export default { createLoja };
