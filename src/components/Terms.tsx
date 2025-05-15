import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Citat: FC = ({}) => {
  const { t } = useTranslation();
  
  return (
    <div className='my-11 md:mb-60 mx-5 md:mx-40 md:w-3/5 '>
      <h1 className='text-primaryTextColor pb-10 md:mt-40 font-extrabold text-lg lg:text-2xl'>{t('terms.h1_title')}</h1>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>{t('terms.title_1')}</h2>
            <p>{t('terms.text_1')}</p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>{t('terms.title_2')}</h2>
            <p>{t('terms.text_2')}</p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>{t('terms.title_3')}</h2>
            <p>{t('terms.text_3')}</p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>{t('terms.title_4')}</h2>
            <p>{t('terms.text_4')}</p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>{t('terms.title_5')}</h2>
            <p>{t('terms.text_5')}</p>
        </div>
    </div>
  );
};

export default Citat;