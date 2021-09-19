import React, { useState } from 'react';
import MarkerStyleModal from './MarkerStyleModal';

const EditorModal = ({
  currentlyOpenModal,
  setCurrentlyOpenModal,
}: {
  currentlyOpenModal: string;
  setCurrentlyOpenModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const close = () => setCurrentlyOpenModal(null);
  const getModalContent = () => {
    switch (currentlyOpenModal) {
      case 'marker-style':
        return <MarkerStyleModal />;
      default:
        return <></>;
    }
  };
  return (
    <div
      className={'modal-outer'}
      style={
        !currentlyOpenModal
          ? { opacity: 0, pointerEvents: 'none' }
          : { opacity: 1 }
      }>
      <div className='modal-inner-box'>
        <div className='closer'>
          <div onClick={close} className='pointer'>
            𝙓
          </div>
        </div>
        <div className='modal-content'>{getModalContent()}</div>
      </div>
    </div>
  );
};

export default EditorModal;
