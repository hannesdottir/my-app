import React, { useState } from 'react';
import i18next from 'i18next';
import './config';
import { useTranslation, initReactI18next  } from 'react-i18next';
import Navbar from './components/Navbar'
import ChangeLanguage from './components/ChangeLanguage'
import ResetPassword from './components/ResetPassword'

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

    <div className="flex justify-center items-center flex-col">
        <ChangeLanguage handleLanguageChange={handleLanguageChange}/>
        <Navbar/>
        <ResetPassword />
    </div>
   
  );
}

export default App;
