import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import icelandicFlag from "../images/icelandicFlag.png";
import swedishFlag from "../images/swedishFlag.png";
import ukFlag from "../images/ukFlag.png";

interface ResetPasswordProps {
  handleLanguageChange: (newLanguage: string) => void;
}

const ChangeLanguage: FC<ResetPasswordProps> = ({ handleLanguageChange }) => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("sv");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = (language: string) => {
    console.log("handleButtonClick");
    setSelectedLanguage(language);
    handleLanguageChange(language);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown = () => {
    console.log("toggleDropdown clicked");
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white rounded-md my-8">
      <button
        className="inline-flex items-left w-32 pl-2 py-1.5 rounded-md border border-gray-200 items-center pr-4"
        onClick={() => toggleDropdown()}
      >
        <img
          className="w-6 h-6 mr-1"
          src={
            selectedLanguage === "sv"
              ? swedishFlag
              : selectedLanguage === "en"
              ? ukFlag
              : icelandicFlag
          }
          alt={`${selectedLanguage} flag`}
        />
        <p className="text-sm">{t(`languagebutton.${selectedLanguage}`)}</p>
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right mr-6 absolute right-0 mt-1 w-32 items-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {["sv", "en", "is"]
            .filter((lang) => lang !== selectedLanguage)
            .map((lang) => (
              <button
                key={lang}
                className="flex flex-row text-gray-900 pl-2 py-1.5 text-xs text-start items-center pr-4 w-full"
                onClick={() => handleButtonClick(lang)}
              >
                <img
                  className="w-6 h-6 mr-1"
                  src={
                    lang === "sv"
                      ? swedishFlag
                      : lang === "en"
                      ? ukFlag
                      : icelandicFlag
                  }
                  alt={`${lang} flag`}
                />
                <p className="text-sm">{t(`languagebutton.${lang}`)}</p>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
