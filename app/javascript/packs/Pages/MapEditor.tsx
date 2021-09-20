import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAppContext } from '../Context';
import { Map, Markers } from '../Types/Map';
import ToolBox from '../Components/Maps/ToolBox';
import MapWrapper from '../Components/Maps/MapWrapper';
import EditorModal from '../Components/Modal/EditorModal';
import mapboxgl from 'mapbox-gl';

type EditorProps = {
  currentTool: string | null;
  edit: boolean;
  theMap: mapboxgl.Map;
  mapData: Map;
  markers: Markers;
  setMarkers: React.Dispatch<React.SetStateAction<Markers>>;
  setMapData: React.Dispatch<React.SetStateAction<Map>>;
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
  mapClickCallback: (e: any) => any;
  setCurrentlyOpenModal: React.Dispatch<React.SetStateAction<string>>;
};
const MapEditorContext = createContext<Partial<EditorProps>>({});
export const useMapEditorContext = () => useContext(MapEditorContext);

const MapEditor = ({ edit }: { edit: boolean }) => {
  const mapDataFromController = useAppContext().controllerData.map as Map;
  const [mapData, setMapData] = useState<Map>(mapDataFromController);
  const [markers, setMarkers] = useState<Markers>(
    useAppContext().controllerData.markers as Markers
  );
  const [theMap, setTheMap] = useState<null | mapboxgl.Map>(null);
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState<null | string>(
    null
  );
  const [currentTool, setCurrentTool] = useState<null | string>(null);
  const [mapClickCallback, setMapClickCallback] = useState<(e) => any>(
    () => () => {}
  );
  useEffect(() => {
    console.log(mapData);
  }, [mapData]);
  return (
    <MapEditorContext.Provider
      value={{
        currentTool,
        edit,
        theMap,
        setTheMap,
        markers,
        setMarkers,
        mapData,
        setMapData,
        mapClickCallback,
        setCurrentlyOpenModal,
      }}>
      <div className='MapEditor'>
        <MapWrapper
          mapData={mapData}
          setTheMap={setTheMap}
          theMap={theMap}
          markers={markers}
        />
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
