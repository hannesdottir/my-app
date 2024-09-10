import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from "../components/ChangeLanguage"

const ResetPassword: FC = ({}) => {
  
  const { t } = useTranslation();

  return (
    <div className='flex items-center flex-col h-2/3 w-full '>
      <div className='w-11/12 mt-16 md:max-w-md'>
      <h1 className='text-2xl text-primaryTextColor font-semibold'>{t('title')}</h1>
      <div className='flex justify-center flex-col mt-5'>
          <div className='flex justify-center flex-col'>
            <p className='text-blueTextColor text-lg font-semibold'>
            {t('choose_password')}
            </p>
            <input type="text" name="name" placeholder={t('example_email')} className='text-primaryTextColor  text-lg border-2 h-12 mt-1 rounded-lg pl-4'/>
          </div>
          <div className='flex justify-center flex-col mt-4'>
            <p className='text-blueTextColor text-lg font-semibold'>
            {t('confirm_password')}
            </p>
            <input type="text" name="name" placeholder={t('example_password')} className='text-primaryTextColor text-lg border-2 h-12 mt-1 rounded-lg pl-4'/>
          </div>
          <button className='bg-primaryButtonColor h-12 w-full rounded-lg border-2 border-primaryButtonBorderColor items-center justify-center mt-8'>
            <p className="text-lg text-white font-semibold">{t('change_password_button')}</p>
          </button>
        </div>
        </div>
    </div>
  );
};

export default ResetPassword;