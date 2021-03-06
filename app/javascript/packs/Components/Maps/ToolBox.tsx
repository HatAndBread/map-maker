import React, { useEffect } from 'react';
import { useMapEditorContext } from '../../Pages/MapEditor';
import Icon from './Icon';
import MarkerTools from './MarkerTools';
import MarkerData from '../../Classes/MarkerData';
import markerIconSrc from '../../../../assets/images/pin.svg';
import labelSrc from '../../../../assets/images/label.svg';
import modalSrc from '../../../../assets/images/modal.svg';
import mapStyleSrc from '../../../../assets/images/map.svg';
import { cloneDeep } from 'lodash';

const ToolBox = ({
  currentTool,
  setCurrentTool,
  setMapClickCallback,
}: {
  currentTool: null | string;
  setCurrentTool: React.Dispatch<React.SetStateAction<string>>;
  setMapClickCallback: React.Dispatch<React.SetStateAction<() => any>>;
}) => {
  const editorCtx = useMapEditorContext();
  const onMapClickMarker = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
    if (
      editorCtx.theMap &&
      (e.originalEvent.target as HTMLTextAreaElement).className ===
        'mapboxgl-canvas'
    ) {
      const newMarkers = cloneDeep(editorCtx.markers);
      newMarkers.push(new MarkerData({ coords: e.lngLat }));
      editorCtx.setMarkers(newMarkers);
      editorCtx.theMap.flyTo({
        center: e.lngLat,
        essential: true,
      });
      editorCtx.setModalEditorPos([e.lngLat.lng, e.lngLat.lat]);
      editorCtx.setMarkerBeingEdited(newMarkers.length - 1);
      editorCtx.setShowModalEditor(true);
    }
  };
  const onMapClickLabel = (e) => {
    console.log('icon');
  };
  const onMapClickModal = (e) => {
    console.log('modal');
  };
  const onMapClickStyle = (e) => {};
  useEffect(() => {
    if (editorCtx.currentTool === 'marker') {
      setMapClickCallback(() => onMapClickMarker);
      console.log(editorCtx.markers);
    }
  }, [editorCtx.markers, editorCtx.currentTool]);
  const getCurrentToolSet = () => {
    switch (currentTool) {
      case 'modal':
        return <div />;
      case 'marker':
        return <MarkerTools />;
      default:
        return <></>;
    }
  };
  return (
    <div className='ToolBox'>
      <div className='top-icons'>
        <Icon
          src={markerIconSrc}
          title='Add a marker'
          clickCallback={() => {
            setCurrentTool('marker');
            setMapClickCallback(
              () => (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) =>
                onMapClickMarker(e)
            );
          }}
        />
        <Icon
          src={labelSrc}
          title='Add a label'
          clickCallback={() => {
            setCurrentTool('label');
            setMapClickCallback(() => onMapClickLabel);
          }}
        />
        <Icon
          src={modalSrc}
          title='Add a modal'
          clickCallback={() => {
            setCurrentTool('modal');
            setMapClickCallback(() => onMapClickModal);
          }}
        />
        <Icon
          src={mapStyleSrc}
          title='Map style'
          clickCallback={() => {
            setCurrentTool('style');
            editorCtx.setCurrentlyOpenModal('style');
            setMapClickCallback(() => onMapClickStyle);
          }}
        />
      </div>
      <div className='specific-toolset'>{getCurrentToolSet()}</div>
    </div>
  );
};

export default ToolBox;
