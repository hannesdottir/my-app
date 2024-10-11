import React, { FC } from 'react';
import GetQueryParameter from './GetQueryParemeter';

const Citat: FC = ({}) => {
  const cValue = GetQueryParameter(); //Anropa funktionen
  
  return (
    <div className='bg-darkBackground'>
      <p className='text-white'>{cValue}</p>
    </div>
  );
};

export default Citat;