import { Schema, model } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Loja:
 *       type: object
 *       required:
 *         - nome
 *         - numero
 *         - segmento
 *         - cep
 *         - location
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
 *         telefone:
 *           type: string
 *           description: Telefone de contato da loja
 *         horarioFuncionamento:
 *           type: object
 *           description: Horário de funcionamento da loja
 *           properties:
 *             segunda:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *             terca:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *             quarta:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *             quinta:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *             sexta:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *             sabado:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *             domingo:
 *               type: object
 *               properties:
 *                 abre:
 *                   type: string
 *                 fecha:
 *                   type: string
 *         location:
 *           type: object
 *           description: Coordenadas geoespaciais da loja
 *           required:
 *             - type
 *             - coordinates
 *           properties:
 *             type:
 *               type: string
 *               enum:
 *                 - Point
 *               description: Tipo de objeto GeoJSON
 *             coordinates:
 *               type: array
 *               items:
 *                 type: number
 *               description: Coordenadas [longitude, latitude]
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
  telefone: { type: String },
  horarioFuncionamento: {
    segunda: { abre: String, fecha: String },
    terca: { abre: String, fecha: String },
    quarta: { abre: String, fecha: String },
    quinta: { abre: String, fecha: String },
    sexta: { abre: String, fecha: String },
    sabado: { abre: String, fecha: String },
    domingo: { abre: String, fecha: String },
  },
  // dados geoespaciais
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
