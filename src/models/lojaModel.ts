import { Schema, model } from 'mongoose';

const lojaSchema = new Schema({
  nome: { type: String, required: true },
  numero: { type: String, required: true },
  segmento: { type: String, required: true },
  cep: { type: String, required: true },
  logradouro: String,
  bairro: String,
  cidade: String,
  estado: String,
  coordenadas: {
    latitude: Number,
    longitude: Number,
  },
});

export default model('Store', lojaSchema);
