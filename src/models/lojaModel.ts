import { Schema, model } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Loja:
 *       type: object
 *       required:
 *         - name
 *         - number
 *         - segment
 *         - cep
 *       properties:
 *         name:
 *           type: string
 *           description: Nome da loja
 *         number:
 *           type: string
 *           description: Número da loja
 *         segment:
 *           type: string
 *           description: Segmento da loja
 *         cep:
 *           type: string
 *           description: CEP da loja
 *         address:
 *           type: object
 *           properties:
 *             logradouro:
 *               type: string
 *             bairro:
 *               type: string
 *             cidade:
 *               type: string
 *             estado:
 *               type: string
 *             cep:
 *               type: string
 *         coordinates:
 *           type: object
 *           properties:
 *             latitude:
 *               type: number
 *             longitude:
 *               type: number
 */

const lojaSchema = new Schema({
  nome: { type: String, required: true },
  numero: { type: String, required: true },
  cep: { type: String, required: true },
  segmento: String,
  logradouro: String,
  bairro: String,
  cidade: String,
  estado: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export default model('Loja', lojaSchema);
