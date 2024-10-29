import axios from 'axios';
import dotenv from 'dotenv';
import AppError from './appError';

dotenv.config({ path: './config.env' });

interface GoogleGeocodeResponse {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
}

export const obterCoordenadasPorEndereco = async (
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string,
  numero?: string,
) => {
  const enderecoCompleto = `${logradouro}, ${numero}, ${bairro}, ${cidade}, ${estado}`;
  const response = await axios.get<GoogleGeocodeResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json`,
    {
      params: {
        address: enderecoCompleto,
        region: 'br',
        key: process.env.GOOGLE_API_KEY,
      },
    },
  );

  if (response.data.results.length > 0) {
    const { lat, lng } = response.data.results[0].geometry.location;
    return { latitude: lat, longitude: lng };
  } else {
    throw new AppError(
      'Não foi possível obter as coordenadas para o endereço informado.',
      404,
    );
  }
};
