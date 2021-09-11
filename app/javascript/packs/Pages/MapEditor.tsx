import React, { useState, useEffect } from 'react';
import { useAppContext } from '../Context';
import { Map } from '../Types/Map';
import ToolBox from '../Components/Maps/ToolBox';
import MapWrapper from '../Components/Maps/MapWrapper';
import mapboxgl from 'mapbox-gl';

const MapEditor = ({ edit }: { edit: boolean }) => {
  const mapData = useAppContext().controllerData.map as Map;
  const [theMap, setTheMap] = useState<null | mapboxgl.Map>();

  return (
    <div className='MapEditor'>
      <MapWrapper mapData={mapData} />
      <ToolBox />
    </div>
  );
};

export default MapEditor;
