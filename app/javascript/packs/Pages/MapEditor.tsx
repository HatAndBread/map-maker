import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAppContext } from '../Context';
import { Map } from '../Types/Map';
import ToolBox from '../Components/Maps/ToolBox';
import MapWrapper from '../Components/Maps/MapWrapper';
import mapboxgl from 'mapbox-gl';
import EditorModal from '../Components/Modal/EditorModal';

type EditorProps = {
  currentTool: string | null;
  edit: boolean;
  mapClickCallback: () => any;
};
const MapEditorContext = createContext<Partial<EditorProps>>({});
export const useMapEditorContext = () => useContext(MapEditorContext);

const MapEditor = ({ edit }: { edit: boolean }) => {
  const mapData = useAppContext().controllerData.map as Map;
  const [theMap, setTheMap] = useState<null | mapboxgl.Map>();
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState<null | string>(
    'hi!'
  );
  const [currentTool, setCurrentTool] = useState<null | string>(null);
  const [mapClickCallback, setMapClickCallback] = useState<() => any>(
    () => () => {}
  );

  useEffect(() => {
    console.log(`Current tool: ${currentTool}`);
  }, [currentTool]);
  return (
    <MapEditorContext.Provider value={{ currentTool, edit, mapClickCallback }}>
      <div className='MapEditor'>
        <MapWrapper mapData={mapData} />
        <ToolBox
          currentTool={currentTool}
          setCurrentTool={setCurrentTool}
          setMapClickCallback={setMapClickCallback}
        />
      </div>
      <EditorModal
        currentlyOpenModal={currentlyOpenModal}
        setCurrentlyOpenModal={setCurrentlyOpenModal}
      />
    </MapEditorContext.Provider>
  );
};

export default MapEditor;
