import React from 'react';
import Icon from './Icon';
import { useMapEditorContext } from '../../Pages/MapEditor';
const MarkerTools = () => {
  const editorCtx = useMapEditorContext();
  return (
    <div className='MarkerTools'>
      <div>{editorCtx.currentTool} tools</div>
      <div className='two-column-grid'>
        <Icon
          src={''}
          title='stuff'
          alt='💅'
          clickCallback={() => console.log('hi!')}
        />
      </div>
    </div>
  );
};

export default MarkerTools;
