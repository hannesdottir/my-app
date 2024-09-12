import React, { useState } from 'react';
import i18next from 'i18next';
import './config';
import { useTranslation, initReactI18next  } from 'react-i18next';
import Navbar from './components/Navbar'
import ChangeLanguage from './components/ChangeLanguage'
import ResetPassword from './pages/ResetPasswordPage'
import HeroImage from './components/HeroImage';

function App() {
  const { t } = useTranslation();
  //Default language
  const [language, setLanguage] = useState('sv');   
 
  const handleLanguageChange = (newLanguage: string) => {
     console.log('Språket är', language);
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  return (

    <div>
        <div className='flex flex-row items-center mt-5'>
          <Navbar/>
          <ChangeLanguage handleLanguageChange={handleLanguageChange}/>
        </div>
       <HeroImage/>
    </div>
   
  );
}

export default App;
