import React, { FC } from 'react';
import ReactCountryFlag from "react-country-flag"

interface ResetPasswordProps {
  handleLanguageChange: (newLanguage: string) => void;
}

const ResetPassword: FC<ResetPasswordProps> = ({handleLanguageChange}) => {
  

  return (
    <div className='flex w-full justify-end mr-14 mt-2'>
            <button className="m-1.5" onClick={() => handleLanguageChange('en')}><ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '2em',}} title="GB"/></button>
            <button className="m-1.5" onClick={() => handleLanguageChange('sv')}><ReactCountryFlag countryCode="SE" svg style={{ width: '2em', height: '2em',}} title="SE"/></button>
            <button className="m-1.5" onClick={() => handleLanguageChange('is')}><ReactCountryFlag countryCode="IS" svg style={{ width: '2em', height: '2em',}} title="IS"/></button>
    </div>
  );
};

export default ResetPassword;