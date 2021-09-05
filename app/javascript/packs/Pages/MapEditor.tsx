import React, { useState, useEffect } from 'react';
import MapboxMap from '../Components/Maps/MapboxMap';
import { useAppContext } from '../Context';
import { Map } from '../Types/Map';

const MapEditor = ({ edit }: { edit: boolean }) => {
  const map = useAppContext().controllerData.map as Map;
  const [mapProperties, setMapProperties] = useState<Map>(map);
  useEffect(() => {
    console.log(mapProperties, '🐪');
  }, []);
  return (
    <div className='MapEditor'>
      <div>This is the map editor</div>
      <MapboxMap />
    </div>
  );
};

export default MapEditor;
