import React from 'react';

const Icon = ({
  currentTool,
  setCurrentTool,
  src,
  title,
  name,
}: {
  currentTool: null | string;
  setCurrentTool: React.Dispatch<React.SetStateAction<string>>;
  src: string;
  title: string;
  name: string;
}) => {
  return (
    <div className='icon-container'>
      <img
        className='Icon'
        src={src}
        title={title}
        onClick={() => {
          setCurrentTool(name);
        }}></img>
    </div>
  );
};

export default Icon;
