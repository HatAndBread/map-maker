import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [theMap, setTheMap] = useState<null | mapboxgl.Map>(null);
  useEffect(() => {
    if (!theMap && mapContainer.current) {
      mapboxgl.accessToken = process.env.MAPBOX_KEY;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-70.9, 42.35],
        zoom: 9,
      });
      setTheMap(map);
    }
  }, [theMap, mapContainer]);
  return (
    <div className='MapboxMap'>
      <div className='map-container' ref={mapContainer} id='map'></div>
    </div>
  );
};

export default MapboxMap;
