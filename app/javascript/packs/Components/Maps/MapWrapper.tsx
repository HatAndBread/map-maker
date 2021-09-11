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
  console.log(example);
  return (
    <div className='MapWrapper'>
      <MapboxMap theMap={theMap} setTheMap={setTheMap}>
        {theMap && <Marker map={theMap} lngLat={[32, 35]} imgUrl={example} />}
      </MapboxMap>
      <ToolBox />
    </div>
  );
};

export default MapWrapper;
