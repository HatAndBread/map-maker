import React, { useState, useEffect } from 'react';
import { Map } from '../../Types/Map';
import MapboxMap from '../Maps/MapboxMap';
import ToolBox from '../Maps/ToolBox';
import Marker from '../Maps/Marker';
import example from '../../../../assets/images/location.svg';

type Props = {
  mapData: Map;
};
const MapWrapper = ({ mapData }: Props) => {
  const [theMap, setTheMap] = useState<null | mapboxgl.Map>();
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
