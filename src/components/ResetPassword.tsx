import { log } from 'console';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ResetPasswordProps {
  handleLanguageChange: (newLanguage: string) => void;
  
}


const ResetPassword: FC<ResetPasswordProps> = ({handleLanguageChange}) => {
  
  const { t } = useTranslation();

  console.log(t('title'));

  return (
    <div className='flex justify-center flex-col items-center h-2/3 w-11/12 '>
      <div className='w-11/12 mt-12 md:max-w-md'>
      <h1 className='text-2xl text-slate-600 font-semibold'>{t('title')}</h1>
      <button onClick={() => handleLanguageChange('en')}>Byt till engelska</button>
      <div className='flex justify-center flex-col mt-5'>
          <div className='flex justify-center flex-col'>
            <p className='text-blueTextColor text-lg font-semibold'>
              Välj nytt lösenord
            </p>
            <input type="text" name="name" placeholder="exempel@exempel.se" className='text-neutral-400  text-lg border-2 h-12 mt-1 rounded-lg pl-4'/>
          </div>
          <div className='flex justify-center flex-col mt-4'>
            <p className='text-blueTextColor text-lg font-semibold'>
              Bekräfta nytt lösenord
            </p>
            <input type="text" name="name" placeholder="exempel@exempel.se" className='text-neutral-400 text-lg border-2 h-12 mt-1 rounded-lg pl-4'/>
          </div>
          <button className='bg-primaryButtonColor h-12 w-full rounded-lg border-2 border-primaryButtonBorderColor items-center justify-center mt-8'>
            <p className="text-lg text-white font-semibold">Ändra lösenord</p>
          </button>
        </div>
        </div>
    </div>
  );
};

export default ResetPassword;