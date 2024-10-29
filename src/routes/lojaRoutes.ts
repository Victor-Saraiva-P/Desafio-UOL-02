import { Router } from 'express';
import lojaController from '../controllers/lojaController';

const router = Router();

// Rota para criar uma nova loja
router.route('/').post(lojaController.createLoja).get(lojaController.getLojas);

// Rota para encontrar lojas no raio de 100km
router.route('/:cep').get(lojaController.encontrarLojasNoRaio100);

export default router;
