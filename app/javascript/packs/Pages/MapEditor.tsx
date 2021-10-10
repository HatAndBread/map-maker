import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAppContext } from '../Context';
import { Map, Markers } from '../Types/Map';
import MarkerData from '../Classes/MarkerData';
import ToolBox from '../Components/Maps/ToolBox';
import MapWrapper from '../Components/Maps/MapWrapper';
import EditorModal from '../Components/Modal/EditorModal';
import ModalEditor from '../Components/Maps/ModalEditor';
import mapboxgl from 'mapbox-gl';

type EditorProps = {
  currentTool: string | null;
  edit: boolean;
  theMap: mapboxgl.Map;
  mapData: Map;
  markers: Markers;
  currentMarker: HTMLDivElement | null;
  modalEditorPos: [number, number];
  setModalEditorPos: React.Dispatch<React.SetStateAction<[number, number]>>;
  setCurrentMarker: React.Dispatch<React.SetStateAction<HTMLDivElement>>;
  setMarkers: React.Dispatch<React.SetStateAction<Markers>>;
  setMapData: React.Dispatch<React.SetStateAction<Map>>;
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
  setShowModalEditor: React.Dispatch<React.SetStateAction<boolean>>;
  markerBeingEdited: number;
  setMarkerBeingEdited: React.Dispatch<React.SetStateAction<number>>;
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
  const [showModalEditor, setShowModalEditor] = useState(false);
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState<null | string>(
    null
  );
  const [currentTool, setCurrentTool] = useState<null | string>(null);
  const [modalEditorPos, setModalEditorPos] = useState<[number, number]>([
    30, 30,
  ]);
  const [mapClickCallback, setMapClickCallback] = useState<(e) => any>(
    () => () => {}
  );
  const [markerBeingEdited, setMarkerBeingEdited] = useState<null | number>(
    null
  );
  useEffect(() => {
    console.log(modalEditorPos);
  }, [modalEditorPos]);
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
        modalEditorPos,
        setModalEditorPos,
        setShowModalEditor,
        mapClickCallback,
        setCurrentlyOpenModal,
        markerBeingEdited,
        setMarkerBeingEdited,
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
      <ModalEditor
        showModalEditor={showModalEditor}
        setShowModalEditor={setShowModalEditor}
        modalEditorPos={modalEditorPos}
      />
    </MapEditorContext.Provider>
  );
};

export default MapEditor;
