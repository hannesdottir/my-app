import React, { useState } from 'react';
import i18next from 'i18next';
import './config';
import { useTranslation, initReactI18next  } from 'react-i18next';
import HomepageHeroImage from './components/HomepageHeroImage'
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
        <HomepageHeroImage/>
        <ResetPassword handleLanguageChange={handleLanguageChange}/>
    </div>
  );
}

export default App;
