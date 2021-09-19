import React, { useState } from 'react';

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
      case 'style':
        return <div>Yo I'm the style modal.</div>;
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
