import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Map, LngLatLike } from 'mapbox-gl';

const Marker = ({
  map,
  lngLat,
  imgUrl,
}: {
  map: Map;
  lngLat: LngLatLike;
  imgUrl?: string;
}) => {
  const markerRef = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && !imgUrl) {
      new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
      setMounted(true);
    }
    if (!mounted && markerRef.current && imgUrl) {
      const marker = markerRef.current;
      marker.style.backgroundImage = `url(${imgUrl})`;
      marker.style.top = `${parseFloat(marker.style.top) + 40}px`; // TODO: Not this but something like this
      new mapboxgl.Marker(markerRef.current).setLngLat(lngLat).addTo(map);
      setMounted(true);
    }
  }, [imgUrl, markerRef, mounted]);
  return imgUrl ? <div className='Marker' ref={markerRef}></div> : null;
};

export default Marker;
