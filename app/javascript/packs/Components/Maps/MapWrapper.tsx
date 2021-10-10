import React, { useMemo } from 'react';
import { Map } from '../../Types/Map';
import MapboxMap from '../Maps/MapboxMap';
import Marker from '../Maps/Marker';
import example from '../../../../assets/images/location.svg';
import mapboxgl from 'mapbox-gl';
import { useMapEditorContext } from '../../Pages/MapEditor';
import { Markers } from '../../Types/Map';
import { useIsBeingEdited } from './useIsBeingEdited';

type Props = {
  mapData: Map;
  theMap: mapboxgl.Map;
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
  markers: Markers;
};
const MapWrapper = ({ mapData, setTheMap, theMap, markers }: Props) => {
  const ctx = useMapEditorContext();
  const isBeingEdited = useIsBeingEdited();
  return (
    <div className='MapWrapper'>
      <MapboxMap theMap={theMap} setTheMap={setTheMap}>
        {theMap &&
          markers.map((marker, i) => (
            <Marker
              map={theMap}
              lngLat={marker.coords}
              imgUrl={example}
              key={i}
              onClick={
                isBeingEdited
                  ? () => {
                      ctx.setModalEditorPos([
                        marker.coords.lng,
                        marker.coords.lat,
                      ]);
                      ctx.setMarkerBeingEdited(i);
                      ctx.setShowModalEditor(true);
                    }
                  : () => {}
              }
            />
          ))}
      </MapboxMap>
    </div>
  );
};

export default MapWrapper;
