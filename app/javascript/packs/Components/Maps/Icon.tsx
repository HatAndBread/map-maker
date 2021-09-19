import React, { useState } from 'react';

const Icon = ({
  clickCallback,
  src,
  title,
  alt,
}: {
  clickCallback: () => any;
  src: string;
  title: string;
  alt?: string;
}) => {
  const [hasError, setHasError] = useState(false);
  return (
    <div className='icon-container'>
      {hasError ? (
        <div className='Icon'>{alt}</div>
      ) : (
        <img
          className='Icon'
          src={src}
          alt={alt || ''}
          title={title}
          onError={() => setHasError(true)}
          onClick={() => {
            clickCallback();
          }}></img>
      )}
    </div>
  );
};

export default Icon;
