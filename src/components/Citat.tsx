import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Citat: FC = ({}) => {
  const { t } = useTranslation();
  
  return (
    <div className='bg-blueBackground'>
      <h1 className='text-primaryTextColor text-center mx-10 py-10 lg:py-24 font-extrabold text-lg lg:text-2xl'>{t('citat.primary')}</h1>
    </div>
  );
};

export default Citat;