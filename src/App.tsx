import React  from 'react';
import HeroImage from './components/HeroImage';
import GetAppSection from './components/GetAppSection'
import InfoSection from './components/InfoSection'
import Citat from './components/Citat'
import Terms from './components/Terms'
import Footer from './components/Footer';
import ResetPassword from './pages/ResetPasswordPage';
import GetQueryParameter from './components/GetQueryParemeter';

function App() {
 

  return (
    <div className='font-lato'>
      <ResetPassword/>
      <HeroImage/>
       <GetAppSection/>
       <InfoSection/>
       <Citat/>
       <Footer/>
    </div>
   
  );
}

export default App;
