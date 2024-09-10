import React, { FC, useState } from 'react';
import icelandicFlag from '../images/icelandicFlag.png';
import swedishFlag from '../images/swedishFlag.png';
import ukFlag from '../images/ukFlag.png';

interface ResetPasswordProps {
  handleLanguageChange: (newLanguage: string) => void;
}

const ChangeLanguage: FC<ResetPasswordProps> = ({ handleLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('sv');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = (language: string) => {
    console.log("handleButtonClick")
    setSelectedLanguage(language);
    handleLanguageChange(language);
    setIsDropdownOpen(!isDropdownOpen);
  };


  const toggleDropdown = () => {
    console.log("toggleDropdown clicked");
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className='flex w-full justify-end'>
       {selectedLanguage==="sv" && 
        <button
          className="inline-flex items-left md:w-48 px-4 py-2 rounded-md border border-gray-200 mr-6 items-center"
          onClick={() => toggleDropdown()}
        >
          <img className="w-8 h-8 mr-1.5" src={swedishFlag} alt="Swedish flag" />
          <p>Svenska</p>
      </button>
        }
        {selectedLanguage==="en" && 
        <button
          className="inline-flex items-left md:w-48 px-4 py-2 rounded-md border border-gray-200 mr-6 items-center"
          onClick={() => toggleDropdown()}
        >
          <img className="w-8 h-8 mr-1.5" src={ukFlag} alt="English flag" />
          <p>English</p>
        </button>
        }
        {selectedLanguage==="is" && 
      <button
        className="inline-flex items-left md:w-48 px-4 py-2 rounded-md border border-gray-200 mr-6 items-center"
        onClick={() => toggleDropdown()}
      >
        <img className="w-8 h-8 mr-1.5" src={icelandicFlag} alt="Icelandic flag" />
        <p>Icelandic</p>
      </button>
        }
      {isDropdownOpen && (
        <div className="origin-top-right mr-6 absolute right-0 mt-14 md:w-48 items-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {selectedLanguage!=="en" && 
          <div>
            <button
              className="flex flex-row text-gray-900 px-4 py-2 text-sm text-start items-center"
              onClick={() => handleButtonClick('en')}
            >
              <img className="w-8 h-8 mr-1.5" src={ukFlag} alt="UK flag" />
              <p>Engelska</p>
            </button>
          </div>
          }
          {selectedLanguage!=="sv" && 
          <div>
            <button
              className="flex flex-row text-gray-900 px-4 py-2 text-sm text-start items-center"
              onClick={() => handleButtonClick('sv')}
            >
              <img className="w-8 h-8 mr-1.5" src={swedishFlag} alt="Swedish flag" />
              <p>Svenska</p>
            </button>
          </div>
          }
          {selectedLanguage!=="is" && 
          <div>
            <button
              className="flex flex-row text-gray-900 px-4 py-2 text-sm text-start items-center"
              onClick={() => handleButtonClick('is')}
            >
              <img className="w-8 h-8 mr-1.5" src={icelandicFlag} alt="Icelandic flag" />
              <p>Isländska</p>
            </button>
          </div>
          }
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;