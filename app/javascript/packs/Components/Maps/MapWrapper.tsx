import React from 'react';
import { Map } from '../../Types/Map';
import MapboxMap from '../Maps/MapboxMap';
import Marker from '../Maps/Marker';
import example from '../../../../assets/images/location.svg';
import mapboxgl from 'mapbox-gl';

type Props = {
  mapData: Map;
  theMap: mapboxgl.Map;
  setTheMap: React.Dispatch<React.SetStateAction<mapboxgl.Map>>;
};
const MapWrapper = ({ mapData, setTheMap, theMap }: Props) => {
  return (
    <div className='MapWrapper'>
      <MapboxMap theMap={theMap} setTheMap={setTheMap}>
        {theMap &&
          [1, 2, 3].map((n) => (
            <Marker
              map={theMap}
              lngLat={[
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10 * n),
              ]}
              imgUrl={example}
              key={n}
            />
          ))}
      </MapboxMap>
    </div>
  );
};

export default MapWrapper;
