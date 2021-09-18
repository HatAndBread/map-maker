import React from 'react';
import Icon from './Icon';
import markerIconSrc from '../../../../assets/images/pin.svg';
import labelSrc from '../../../../assets/images/label.svg';
import modalSrc from '../../../../assets/images/modal.svg';
const ToolBox = ({
  currentTool,
  setCurrentTool,
}: {
  currentTool: null | string;
  setCurrentTool: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className='ToolBox'>
      <Icon
        src={markerIconSrc}
        title='Add a marker'
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        name={'marker'}
      />
      <Icon
        src={labelSrc}
        title='Add a label'
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        name={'label'}
      />
      <Icon
        src={modalSrc}
        title='Add a modal'
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        name={'modal'}
      />
    </div>
  );
};

export default ToolBox;
