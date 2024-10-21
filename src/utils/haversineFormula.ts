import haversine from 'haversine';
import { Cordenada } from '../types/Cordenada';

export const formulaHaversine = (start: Cordenada, end: Cordenada) => {
  return haversine(start, end);
};
