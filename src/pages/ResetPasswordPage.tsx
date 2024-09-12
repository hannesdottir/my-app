import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ResetPassword: FC = ({}) => {
  const { t } = useTranslation();

  const [chosenNewPassword, setChosenNewPassword] = useState('')
  const [confirmChosenNewPassword, setConfirmChosenNewPassword] = useState('')
  const [showValidationDiv, setShowValidationDiv] = useState(false);
  const [validationMessages, setValidationMessages] = useState<string[]>([]);

  const handleResetPassword = () => {
    // Clear previous validation messages
    setValidationMessages([]);

    if (!chosenNewPassword || !confirmChosenNewPassword) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('pleaseFillInBothPasswords')]);
    } else if (chosenNewPassword !== confirmChosenNewPassword) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('passwordsDoNotMatch')]);
    } else if (chosenNewPassword.length < 8) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('passwordMustBeAtLeast8CharactersLong')]);
    } else if (!/[A-Z]/.test(chosenNewPassword)) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('passwordMustContainAtLeastOneUppercaseLetter')]);
    } else if (!/[0-9]/.test(chosenNewPassword)) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('passwordMustContainAtLeastOneNumber')]);
    } else {
      // Validation passes, hide the div
      setShowValidationDiv(false);

      // Proceed with password reset logic
      console.log('chosenNewPassword:', chosenNewPassword);
      console.log('confirmChosenNewPassword:', confirmChosenNewPassword);
    }
  };


  return (
    <div className='flex items-center flex-col h-2/3 w-full '>
      <div className='w-11/12 mt-16 md:max-w-md'>
      <h1 className='text-2xl text-primaryTextColor font-semibold'>{t('title')}</h1>
      <div className='flex justify-center flex-col mt-5'>
          <div className='flex justify-center flex-col'>
            <p className='text-blueTextColor text-lg font-semibold'>
            {t('choose_password')}
            </p>
            <input 
              type="text" 
              value={chosenNewPassword} 
              onChange={(event) => setChosenNewPassword(event.target.value)} 
              placeholder={t('example_password')} 
              className='text-primaryTextColor  text-lg border-2 h-12 mt-1 rounded-lg pl-4'
            />
          </div>
          <div className='flex justify-center flex-col mt-4'>
            <p className='text-blueTextColor text-lg font-semibold'>
            {t('confirm_password')}
            </p>
            <input 
              type="text" 
              value={confirmChosenNewPassword} 
              onChange={(event) => setConfirmChosenNewPassword(event.target.value)} 
              placeholder={t('example_password')} 
              className='text-primaryTextColor text-lg border-2 h-12 mt-1 rounded-lg pl-4'
            />
          </div>
          {showValidationDiv && (
        <div className="bg-validationButtonColor border-validationButtonBorderColor flex justify-center items-center rounded-lg mt-8 h-12 drop-shadow font-semibold text-white">
          <p>{validationMessages.join(', ')}</p>
        </div>
      )}
          <button onClick={handleResetPassword} className='bg-primaryButtonColor h-12 w-full rounded-lg border-2 border-primaryButtonBorderColor items-center justify-center mt-8'>
            <p className="text-lg text-white font-semibold">{t('change_password_button')}</p>
          </button>
        </div>
        </div>
    </div>
  );
};

export default ResetPassword;