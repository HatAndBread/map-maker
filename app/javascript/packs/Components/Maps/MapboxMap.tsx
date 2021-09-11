import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

type Props = {
  children?: JSX.Element;
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
  theMap: null | mapboxgl.Map;
};
const MapboxMap = ({ children, setTheMap, theMap }: Props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
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
      <div className='map-container' ref={mapContainer} id='map'>
        {children}
      </div>
    </div>
  );
};

export default MapboxMap;
