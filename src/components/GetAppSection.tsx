import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import GooglePlayLogo from '../images/GooglePlayLogo.png'
import AppleLogo from '../images/AppleLogo.png'

const HeroImage: FC = ({}) => {
  const { t } = useTranslation();
 
  return (
    <div className='bg-darkBackground p-7 md:p-14'>
        <h1 className='text-white font-semibold text-lg md:text-3xl flex justify-center'>{t('getapp.primary')}</h1>
      <div className='flex justify-center my-4 md:mt-8'>
        <div className='flex flex-row justify-center bg-white items-center w-48 h-16  mr-1.5 md:mr-3 rounded-lg drop-shadow'>
          <img src={AppleLogo} className="w-9 mr-2" alt="GooglePlayLogo" />
            <div className='font-bold'>
                <p className='text-sm'>{t('getapp.apple_1')}</p>
                <p className='text-base'>{t('getapp.apple_2')}</p>
            </div>
        </div>
        <div className='flex flex-row justify-center bg-white items-center w-48 h-16 ml-1.5 md:ml-3 rounded-lg drop-shadow'>
          <img src={GooglePlayLogo} className='w-9 ml-2 mr-1' alt="AppleLogo" />
              <div className='font-bold mr-1'>
                  <p className='text-sm'>{t('getapp.google_play_1')}</p>
                  <p className='text-base'>{t('getapp.google_play_2')}</p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;