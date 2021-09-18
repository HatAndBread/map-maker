import React from 'react';
import Icon from './Icon';
import markerIconSrc from '../../../../assets/images/pin.svg';
import labelSrc from '../../../../assets/images/label.svg';
import modalSrc from '../../../../assets/images/modal.svg';
const ToolBox = ({
  currentTool,
  setCurrentTool,
  setMapClickCallback,
}: {
  currentTool: null | string;
  setCurrentTool: React.Dispatch<React.SetStateAction<string>>;
  setMapClickCallback: React.Dispatch<React.SetStateAction<() => any>>;
}) => {
  return (
    <div className='ToolBox'>
      <Icon
        src={markerIconSrc}
        title='Add a marker'
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        clickCallback={() =>
          setMapClickCallback(() => () => console.log('hi!!!!'))
        }
        name={'marker'}
      />
      <Icon
        src={labelSrc}
        title='Add a label'
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        clickCallback={() =>
          setMapClickCallback(() => () => console.log('hello!'))
        }
        name={'label'}
      />
      <Icon
        src={modalSrc}
        title='Add a modal'
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        clickCallback={() =>
          setMapClickCallback(() => () => console.log('howdy!'))
        }
        name={'modal'}
      />
    </div>
  );
};

export default ToolBox;
