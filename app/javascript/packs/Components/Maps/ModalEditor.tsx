import React, { useState, useRef, useEffect } from 'react';
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
  const [theModal, setTheModal] = useState<null | mapboxgl.Popup>(null);
  const ctx = useMapEditorContext();
  const theMap = ctx.theMap;
  const markerBeingEdited = ctx.markerBeingEdited;
  const markers = ctx.markers;
  const ref = useRef<HTMLDivElement>();
  const textAreaRef = useRef<HTMLTextAreaElement>();
  useEffect(() => {
    if (theMap && ref.current && !mounted) {
      const popupOptions = {
        anchor: 'bottom-left' as mapboxgl.Anchor,
        offset: [-40, -60] as mapboxgl.PointLike,
        closeButton: false,
        closeOnClick: false,
      };
      setTheModal(
        new mapboxgl.Popup(popupOptions)
          .setLngLat(modalEditorPos)
          .setDOMContent(ref.current)
          .setMaxWidth('0px')
          .addTo(theMap)
      );
      setMounted(true);
    }
  }, [theMap, mounted, ref]);

  useEffect(() => {
    if (theModal) {
      theModal.setLngLat(modalEditorPos);
      if (textAreaRef.current) {
        textAreaRef.current.focus();
      }
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
              pointerEvents: 'initial',
            }
          : { opacity: 0, pointerEvents: 'none' }
      }>
      <div className='modal-closer'>
        <div
          className='pointer closer'
          onClick={() => setShowModalEditor(false)}>
          X
        </div>
      </div>{' '}
      <textarea
        ref={textAreaRef}
        onChange={(e) => {
          markers[markerBeingEdited].modalTextContent = e.target.value;
          console.log(markers[markerBeingEdited]);
        }}></textarea>
    </div>
  );
};

export default ModalEditor;
