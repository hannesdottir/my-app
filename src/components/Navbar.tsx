import React, { FC, useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import i18next from "i18next";
import "../config";
import { useTranslation, initReactI18next } from "react-i18next";

const Navbar: FC = ({}) => {
  const { t } = useTranslation();
  //Default language
  const [language, setLanguage] = useState("sv");
  const handleLanguageChange = (newLanguage: string) => {
    console.log("Språket är", language);
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };
  return (
    <div className="flex flex-row items-center justify-between px-6">
      <h1 className="text text-3xl md:text-5xl text-white font-zenTokyoZoo my-8">
        KROKAD
      </h1>
      <ChangeLanguage handleLanguageChange={handleLanguageChange} />
    </div>
  );
};

export default Navbar;
