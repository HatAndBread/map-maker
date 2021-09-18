import React, { useRef, useEffect, useState, useMemo } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { useAppContext } from '../../Context';

type Props = {
  children?: JSX.Element[];
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
  theMap: null | mapboxgl.Map;
};
const MapboxMap = ({ children, setTheMap, theMap }: Props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const controllerAction =
    useAppContext()?.controllerData?.controllerAction || 'none';
  const isBeingEdited = useMemo(
    () => ['maps#new', 'maps#edit'].includes(controllerAction),
    [controllerAction]
  );
  console.log('is being edited', isBeingEdited);
  useEffect(() => {
    if (!theMap && mapContainer.current) {
      mapboxgl.accessToken = process.env.MAPBOX_KEY;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-70.9, 42.35],
        zoom: 9,
      });
      map.on('click', () => {
        if (isBeingEdited) {
          console.log('You clicked the map!');
        }
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
