import { Router } from 'express';
import lojaController from '../controllers/lojaController';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Lojas
 *     description: API para gerenciamento de lojas físicas
 * components:
 *   schemas:
 *     Loja:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID da loja
 *         nome:
 *           type: string
 *           description: Nome da loja
 *         numero:
 *           type: string
 *           description: Número da loja
 *         segmento:
 *           type: string
 *           description: Segmento da loja
 *         cep:
 *           type: string
 *           description: CEP da loja
 *         endereco:
 *           type: string
 *           description: Endereço completo da loja
 *     LojaInput:
 *       type: object
 *       required:
 *         - nome
 *         - numero
 *         - segmento
 *         - cep
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome da loja
 *         numero:
 *           type: string
 *           description: Número da loja
 *         segmento:
 *           type: string
 *           description: Segmento da loja
 *         cep:
 *           type: string
 *           description: CEP da loja
 */

/**
 * @swagger
 * /lojas:
 *   post:
 *     summary: Cria uma nova loja
 *     tags: [Lojas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LojaInput'
 *           example:
 *             nome: "Loja de tabuleiro"
 *             numero: "1"
 *             segmento: "Jogos de Tabuleiro"
 *             cep: "55299-715"
 *     responses:
 *       201:
 *         description: Loja criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Loja'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno no servidor
 */
router.post('/', lojaController.createLoja);

/**
 * @swagger
 * /lojas:
 *   get:
 *     summary: Retorna a lista de todas as lojas
 *     tags: [Lojas]
 *     responses:
 *       200:
 *         description: Lista de lojas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Loja'
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/', lojaController.getLojas);

/**
 * @swagger
 * /lojas/{id}:
 *   delete:
 *     summary: Deleta uma loja pelo ID
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da loja
 *     responses:
 *       204:
 *         description: Loja deletada com sucesso
 *       500:
 *         description: Erro interno no servidor
 */
router.delete('/:id', lojaController.deleteLojaById);

/**
 * @swagger
 * /lojas/{cep}:
 *   get:
 *     summary: Encontra lojas dentro de um raio de 100 km a partir do CEP fornecido
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: cep
 *         required: true
 *         schema:
 *           type: string
 *         description: CEP para buscar lojas próximas num rario de 100 km
 *     responses:
 *       200:
 *         description: Lista de lojas próximas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Loja'
 *       404:
 *         description: Nenhuma loja encontrada no raio de 100 Km
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/:cep', lojaController.encontrarLojasNoRaio100);

export default router;
