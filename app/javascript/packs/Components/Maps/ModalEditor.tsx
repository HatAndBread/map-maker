import React, { useState, useRef, useEffect } from 'react';
import Marker from './Marker';
import { useMapEditorContext } from '../../Pages/MapEditor';
import mapboxgl from 'mapbox-gl';

const ModalEditor = ({
  showModalEditor,
  setShowModalEditor,
  modalEditorPos,
}: {
  showModalEditor: boolean;
  setShowModalEditor: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditorPos: [number, number];
}) => {
  const [mounted, setMounted] = useState(false);
  const [theModal, setTheModal] = useState<null | mapboxgl.Marker>(null);
  const theMap = useMapEditorContext().theMap;
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    if (theMap && ref.current && !mounted) {
      const markerOptions = {
        offset: [80, -160] as mapboxgl.PointLike,
      };
      setTheModal(
        new mapboxgl.Marker(ref.current, markerOptions)
          .setLngLat(modalEditorPos)
          .addTo(theMap)
      );
      setMounted(true);
    }
  }, [theMap, mounted, ref]);

  useEffect(() => {
    if (theModal) {
      theModal.setLngLat(modalEditorPos);
    }
  }, [modalEditorPos]);
  return (
    <div
      className='ModalEditor'
      ref={ref}
      style={
        showModalEditor
          ? {
              opacity: 1,
              pointerEvents: 'all',
            }
          : { opacity: 0, pointerEvents: 'none' }
      }>
      <div>HII!!!!!!!!!!!!!!!!!</div>
    </div>
  );
};

export default ModalEditor;
