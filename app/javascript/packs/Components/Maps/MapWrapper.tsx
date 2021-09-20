import React from 'react';
import { Map } from '../../Types/Map';
import MapboxMap from '../Maps/MapboxMap';
import Marker from '../Maps/Marker';
import example from '../../../../assets/images/location.svg';
import mapboxgl from 'mapbox-gl';
import { Markers } from '../../Types/Map';

type Props = {
  mapData: Map;
  theMap: mapboxgl.Map;
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
  markers: Markers;
};
const MapWrapper = ({ mapData, setTheMap, theMap, markers }: Props) => {
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
            />
          ))}
      </MapboxMap>
    </div>
  );
};

export default MapWrapper;
