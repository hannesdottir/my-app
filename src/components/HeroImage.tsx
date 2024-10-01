import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';


const HeroImage: FC = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-image bg-cover flex flex-col bg-center bg-fixed bg-no-repeat h-screen">
      <Navbar/>
      <div className="flex flex-col justify-end ml-12 mb-10 h-full xl:ml-96 lg:mb-40 lg:w-1/4">
        <h1 className="text-5xl lg:text-8xl font-semibold text-white ">{t('hero.primary')}</h1>
        <div>
          <h2 className="text-base lg:text-3xl lg:font-bold text-white w-2/4 lg:w-80 mt-3 lg:mt-6">{t('hero.secondary')}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;