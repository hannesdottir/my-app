import React, { FC } from 'react'
import icelandicFlag from '../images/icelandicFlag.png'
import swedishFlag from '../images/swedishFlag.png'
import ukFlag from '../images/ukFlag.png'

interface ResetPasswordProps {
  handleLanguageChange: (newLanguage: string) => void;
}

const ChangeLanguage: FC<ResetPasswordProps> = ({handleLanguageChange}) => {
  

  return (
    <div className='flex w-full justify-end mr-2 mt-2'>
       <div className='flex w-full justify-end mr-5 mt-2'>
        <select className='flex flex-row' onChange={(event) => handleLanguageChange(event.target.value)}>
          <option value="sv">
            <img src={swedishFlag} alt="Swedish flag" style={{ width: '2em', height: '2em' }} />
            <p>sv</p>
          </option>
          <option value="en">
            <img src={ukFlag} alt="UK flag" style={{ width: '2em', height: '2em' }} />
          <p>en</p>
          </option>
          <option value="is">
            <img src={icelandicFlag} alt="Icelandic flag" style={{ width: '2em', height: '2em' }} />
          <p>is</p>
          </option>
        </select>
    </div>
    </div>
  );
};

export default ChangeLanguage;