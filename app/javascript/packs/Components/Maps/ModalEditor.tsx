import React from 'react';

const ModalEditor = ({
  showModalEditor,
  setShowModalEditor,
}: {
  showModalEditor: boolean;
  setShowModalEditor: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className='ModalEditor'
      style={showModalEditor ? { opacity: 1, pointerEvents: 'all' } : {}}>
      <div>HII!!!!!!!!!!!!!!!!!</div>
    </div>
  );
};

export default ModalEditor;
