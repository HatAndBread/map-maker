import React, { useState, useEffect } from 'react';
import { useAppContext } from '../Context';
import { Map } from '../Types/Map';
import ToolBox from '../Components/Maps/ToolBox';
import MapWrapper from '../Components/Maps/MapWrapper';
import mapboxgl from 'mapbox-gl';

const MapEditor = ({ edit }: { edit: boolean }) => {
  const mapData = useAppContext().controllerData.map as Map;
  const [theMap, setTheMap] = useState<null | mapboxgl.Map>();
  const [currentTool, setCurrentTool] = useState<null | string>(null);
  useEffect(() => {
    console.log(`Current tool: ${currentTool}`);
  }, [currentTool]);
  return (
    <div className='MapEditor'>
      <MapWrapper mapData={mapData} />
      <ToolBox currentTool={currentTool} setCurrentTool={setCurrentTool} />
    </div>
  );
};

export default MapEditor;
