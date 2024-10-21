import axios from 'axios';
import dotenv from 'dotenv';

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

export const obterCoordenadasViaCep = async (cep: string) => {
  const response = await axios.get<GoogleGeocodeResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json`,
    {
      params: {
        address: cep,
        region: 'br',
        key: process.env.GOOGLE_API_KEY,
      },
    },
  );

  if (response.data.results.length > 0) {
    const { lat, lng } = response.data.results[0].geometry.location;
    return { latitude: lat, longitude: lng };
  } else {
    throw new Error(
      'Não foi possível obter as coordenadas para o CEP informado.',
    );
  }
};
