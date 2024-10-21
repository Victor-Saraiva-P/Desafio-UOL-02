import { Router } from 'express';
import lojaController from '../controllers/lojaController';

const router = Router();

// Rota para criar uma nova loja
router.post('/lojas', lojaController.createLoja);

export default router;