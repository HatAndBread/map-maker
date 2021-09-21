import mapboxgl from 'mapbox-gl';
import MarkerData from '../Classes/MarkerData';
export type Map = {
  createdAt: null | string;
  id: null | string;
  lat: null | string | number;
  lon: null | string | number;
  mapStyle: null | string;
  name: null | string;
  updatedAt: null | string;
  userId: null | string;
};

export type Markers = MarkerData[];
