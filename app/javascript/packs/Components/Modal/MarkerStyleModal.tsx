import React from 'react';
import Form from '../Form/Form';
const MarkerStyleModal = () => {
  return (
    <div className='MapStyleModal'>
      <div>Upload an image: </div>
      <Form className='image-upload-form' action='' method='POST'>
        <input type='file' accept='.gif,.jpg,.jpeg,.png,.svg'></input>
      </Form>
    </div>
  );
};

export default MarkerStyleModal;
