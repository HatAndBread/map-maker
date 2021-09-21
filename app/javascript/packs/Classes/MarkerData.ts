import { LngLat } from 'mapbox-gl';

export default class MarkerData {
  imgUrl: string;
  coords: LngLat;
  modalTextContent: string | undefined;
  modalImgUrls: string[] | undefined;
  modalVideoUrls: string[] | undefined;
  constructor(options: {
    imgUrl?: string | null;
    coords: mapboxgl.LngLat;
    modalTextContent?: string;
    modalImgUrls?: string[];
    modalVideoUrls?: string[];
  }) {
    this.imgUrl = options.imgUrl || null;
    this.coords = options.coords;
    this.modalTextContent = options.modalTextContent || null;
    this.modalImgUrls = options.modalImgUrls || null;
    this.modalVideoUrls = options.modalVideoUrls || null;
  }
  hasModal(): boolean {
    if (this.modalTextContent || this.modalImgUrls || this.modalVideoUrls) {
      return true;
    }
  }
}
