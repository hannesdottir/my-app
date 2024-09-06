import React from 'react';
import icelandicFlag from '../images/icelandicFlag.png'

interface imageOptionProps{
    imageSrc: string
}

function ImageOption({ imageSrc }: imageOptionProps) {
  return (
    <option>
      <img src={imageSrc} style={{ width: '20px', height: '20px' }} />
    </option>
  );
}

export default ImageOption;