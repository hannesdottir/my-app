import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ExempleScreen from '../images/ExempleScreen.png'

const InfoSection: FC = ({}) => {
  const { t } = useTranslation();
 
  return (
    <div className='my-11 text-primaryTextColor'>
        <h1 className='flex md:justify-center items-center font-extrabold mx-4 text-2xl lg:text-4xl text-center lg:py-6'>{t('infosection.title')}</h1>
        <div className='md:flex md:flex-row-reverse md:justify-center md:items-center'>
          <img src={ExempleScreen} className="h-full lg:w-1/3" alt="ExempleScreen"/>
          <div className='md:flex md:items-center md:flex-col'>
              <div className='md:w-4/6 mx-4 md:mt-12'>
                <h2 className='font-bold text-xl md:text-2xl lg:text-3xl mb-3'>{t('infosection.primary_1')}</h2>
                  <h3 className='font-extrabold text-lg'>{t('infosection.secondary_1')}</h3>
                      <p className='text-lg md:text-xl'>{t('infosection.info_text_1')}</p>
                  <h3 className='font-extrabold text-lg mt-3'>{t('infosection.secondary_2')}</h3>
                      <p className='text-lg md:text-xl'>{t('infosection.info_text_2')}</p>
              </div>
              <div className='md:w-4/6 mx-4 my-10'>
                  <h2 className='font-bold text-xl lg:text-3xl my-3'>{t('infosection.primary_2')}</h2>
                  <p className='text-lg md:text-xl'>{t('infosection.info_text_3')}</p>
              </div>
              </div>
          </div>
    </div>
  );
};

export default InfoSection;