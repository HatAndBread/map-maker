import React, { useRef, useEffect, useState, useMemo } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { useAppContext } from '../../Context';
import { useMapEditorContext } from '../../Pages/MapEditor';
let previousCallback: (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => any =
  () => {};

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
  const editorContext = isBeingEdited ? useMapEditorContext() : null;
  console.log(editorContext, 'sdfkldf');
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

  useEffect(() => {
    if (theMap && editorContext?.mapClickCallback) {
      theMap.off('click', previousCallback);
      previousCallback = editorContext.mapClickCallback;
      theMap.on('click', previousCallback);
    }
    if (theMap && editorContext) {
      if (editorContext.currentTool === 'marker') {
        theMap.getCanvas().style.cursor = 'crosshair';
      } else {
        theMap.getCanvas().style.cursor = 'grab';
      }
    }
  }, [editorContext, theMap]);
  return (
    <div className='MapboxMap'>
      <div className='map-container' ref={mapContainer} id='map'>
        {children}
      </div>
    </div>
  );
};

export default MapboxMap;
