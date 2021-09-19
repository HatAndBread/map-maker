import React from 'react';
import { useMapEditorContext } from '../../Pages/MapEditor';
import Icon from './Icon';
import MarkerTools from './MarkerTools';
import markerIconSrc from '../../../../assets/images/pin.svg';
import labelSrc from '../../../../assets/images/label.svg';
import modalSrc from '../../../../assets/images/modal.svg';
import mapStyleSrc from '../../../../assets/images/map.svg';

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
  const onMarkerIconClick = () => {
    setCurrentTool('marker');
  };
  const onLabelIconClick = () => {
    setCurrentTool('label');
  };
  const onModalIconClick = () => {
    setCurrentTool('modal');
  };
  const onStyleIconClick = () => {
    setCurrentTool('style');
    editorCtx.setCurrentlyOpenModal('style');
  };
  const getCurrentToolSet = () => {
    switch (currentTool) {
      case 'modal':
        return <MarkerTools />;
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
          clickCallback={() => setMapClickCallback(onMarkerIconClick)}
        />
        <Icon
          src={labelSrc}
          title='Add a label'
          clickCallback={() => setMapClickCallback(onLabelIconClick)}
        />
        <Icon
          src={modalSrc}
          title='Add a modal'
          clickCallback={() => setMapClickCallback(onModalIconClick)}
        />
        <Icon
          src={mapStyleSrc}
          title='Map style'
          clickCallback={() => setMapClickCallback(onStyleIconClick)}
        />
      </div>
      <div className='specific-toolset'>{getCurrentToolSet()}</div>
    </div>
  );
};

export default ToolBox;
