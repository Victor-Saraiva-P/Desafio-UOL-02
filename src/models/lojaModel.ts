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
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

export default model('Loja', lojaSchema);
