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
  setCurrentlyOpenModal: React.Dispatch<React.SetStateAction<string>>;
};
const MapEditorContext = createContext<Partial<EditorProps>>({});
export const useMapEditorContext = () => useContext(MapEditorContext);

const MapEditor = ({ edit }: { edit: boolean }) => {
  const mapData = useAppContext().controllerData.map as Map;
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState<null | string>(
    null
  );
  const [currentTool, setCurrentTool] = useState<null | string>(null);
  const [mapClickCallback, setMapClickCallback] = useState<() => any>(
    () => () => {}
  );

  return (
    <MapEditorContext.Provider
      value={{ currentTool, edit, mapClickCallback, setCurrentlyOpenModal }}>
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
