import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendResetPasswordRequest } from '../apiRequests';
import GetQueryParameter from '../components/GetQueryParemeter';

const ResetPassword: FC = ({}) => {
  const { t } = useTranslation();

  const [cValue] = useState(GetQueryParameter());

  const [chosenNewPassword, setChosenNewPassword] = useState('');
  const [confirmChosenNewPassword, setConfirmChosenNewPassword] = useState('');
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(true);
  const [showValidationDiv, setShowValidationDiv] = useState(false);
  const [validationMessages, setValidationMessages] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async () => {

    // Clear previous validation messages
    setValidationMessages([]);

    if (!chosenNewPassword || !confirmChosenNewPassword) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('resetpassword.pleaseFillInBothPasswords')]);
    } else if (chosenNewPassword !== confirmChosenNewPassword) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('resetpassword.passwordsDoNotMatch')]);
    } else if (chosenNewPassword.length < 8) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('resetpassword.passwordMustBeAtLeast8CharactersLong')]);
    } else if (!/[A-Z]/.test(chosenNewPassword)) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('resetpassword.passwordMustContainAtLeastOneUppercaseLetter')]);
    } else if (!/[0-9]/.test(chosenNewPassword)) {
      setShowValidationDiv(true);
      setValidationMessages(prevMessages => [...prevMessages, t('resetpassword.passwordMustContainAtLeastOneNumber')]);
    } else {
      // Validation passes, hide the div
      setShowValidationDiv(false);

      try {
        const result = await sendResetPasswordRequest(cValue, chosenNewPassword, confirmChosenNewPassword);

        if (result.success) {
          // Hide input fields, button, and show success message
          setShowResetPasswordForm(false);
          setSuccessMessage(t('resetpassword.passwordResetSuccess'));
        } else {
          console.error('Error resetting password:', result.error?.message || 'An error occurred');
          // Update validation state to display an error message
          setValidationMessages(['Ett fel har inträffat, försök igen.']);
          setShowValidationDiv(true);

          //Töm inputfälten
          setChosenNewPassword('');
          setConfirmChosenNewPassword('');
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        // Handle unexpected errors (e.g., display a generic error message)
      }
    }
  };





  return (
    <div className='flex items-center flex-col h-2/3 w-full '>
      {showResetPasswordForm ? (
        <div className='w-11/12 mt-16 md:max-w-md'>
          <h1 className='text-2xl text-primaryTextColor font-semibold'>{t('resetpassword.title')}</h1>
          <div className='flex justify-center flex-col mt-5'>
            <div className='flex justify-center flex-col'>
              <p className='text-blueTextColor text-lg font-semibold'>
                {t('resetpassword.choose_password')}
              </p>
              <input
                type="text"
                value={chosenNewPassword}
                onChange={(event) => setChosenNewPassword(event.target.value)}
                placeholder={t('resetpassword.example_password')}
                className='text-primaryTextColor  text-lg border-2 h-12 mt-1 rounded-lg pl-4'
              />
            </div>
            <div className='flex justify-center flex-col mt-4'>
              <p className='text-blueTextColor text-lg font-semibold'>
                {t('resetpassword.confirm_password')}
              </p>
              <input
                type="text"
                value={confirmChosenNewPassword}
                onChange={(event) => setConfirmChosenNewPassword(event.target.value)}
                placeholder={t('resetpassword.example_password')}
                className='text-primaryTextColor text-lg border-2 h-12 mt-1 rounded-lg pl-4'
              />
            </div>
            {showValidationDiv && (
              <div className="bg-validationButtonColor border-validationButtonBorderColor flex justify-center items-center rounded-lg mt-8 h-12 drop-shadow font-semibold text-white">
                <p>{validationMessages.join(', ')}</p>
              </div>
            )}
            <button onClick={handleResetPassword}
            className='bg-primaryButtonColor h-12 w-full rounded-lg border-2 border-primaryButtonBorderColor items-center justify-center mt-8'>
              <p className="text-lg text-white font-semibold">{t('resetpassword.change_password_button')}</p>
            </button>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <p className='text-lg text-green-500 font-semibold'>{t('passwordResetSuccess')}</p>
        </div>
      )}
    </div>
  );
};



export default ResetPassword;