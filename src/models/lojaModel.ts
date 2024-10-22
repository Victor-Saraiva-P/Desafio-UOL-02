import { Schema, model } from 'mongoose';

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
