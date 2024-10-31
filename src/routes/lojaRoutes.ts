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
 *     lojaSemHorario:
 *       type: object
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
 *         telefone:
 *           type: string
 *           description: Telefone de contato da loja
 *         cep:
 *           type: string
 *           description: CEP da loja
 *         logradouro:
 *           type: string
 *           description: Logradouro da loja
 *         bairro:
 *           type: string
 *           description: Bairro da loja
 *         cidade:
 *           type: string
 *           description: Cidade da loja
 *         estado:
 *           type: string
 *           description: Estado da loja
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
 *             $ref: '#/components/schemas/LojaCompleta'
 *           example:
 *             nome: "Loja Exemplo"
 *             numero: "123"
 *             segmento: "Vestuário"
 *             cep: "99999-999"
 *             telefone: "(11) 1234-5678"
 *             horarioFuncionamento:
 *               segunda:
 *                 abre: "08:00"
 *                 fecha: "18:00"
 *               terca:
 *                 abre: "08:00"
 *                 fecha: "18:00"
 *               quarta:
 *                 abre: "08:00"
 *                 fecha: "18:00"
 *               quinta:
 *                 abre: "08:00"
 *                 fecha: "18:00"
 *               sexta:
 *                 abre: "08:00"
 *                 fecha: "18:00"
 *               sabado:
 *                 abre: "10:00"
 *                 fecha: "16:00"
 *               domingo:
 *                 abre: "Fechado"
 *                 fecha: "Fechado"
 *     responses:
 *       201:
 *         description: Loja criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LojaCompleta'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno no servidor
 */
router.post('/', lojaController.createLoja);

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
 *               $ref: '#/components/schemas/lojaSemHorario'
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/', lojaController.getLojas);

/**
 * @swagger
 * /lojas/{id}:
 *   get:
 *     summary: Retorna uma loja pelo ID
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da loja
 *     responses:
 *       200:
 *         description: Loja encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LojaCompleta'
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/:id', lojaController.getLojaById);

/**
 * @swagger
 * /lojas/buscar/{cep}:
 *   get:
 *     summary: Encontra lojas dentro de um raio de 100 km a partir do CEP fornecido
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: cep
 *         required: true
 *         schema:
 *           type: string
 *         description: CEP para buscar lojas próximas num raio de 100 km
 *     responses:
 *       200:
 *         description: Lista de lojas próximas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/lojaSemHorario'
 *       404:
 *         description: Nenhuma loja encontrada no raio de 100 Km
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/buscar/:cep', lojaController.encontrarLojasNoRaio100);

export default router;
