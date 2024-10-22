import haversine from 'haversine';
interface Cordenada {
  latitude: number;
  longitude: number;
}
export const formulaHaversine = (start: Cordenada, end: Cordenada) => {
  return haversine(start, end);
};
