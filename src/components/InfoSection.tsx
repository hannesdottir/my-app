import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ExempleScreen from "../images/ExempleScreen.png";

const InfoSection: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="my-12 text-primaryTextColor">
      {/* Main Title */}
      <h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl mx-6 lg:py-6">
        {t("infosection.title")}
      </h1>

      {/* Layout */}
      <div className="md:flex md:flex-row-reverse md:justify-center md:items-center">
        <img
          src={ExempleScreen}
          className="h-full lg:w-1/3"
          alt="Example Screen"
        />

        <div className="md:flex md:items-center md:flex-col">
          {/* First Section */}
          <div className="md:w-4/6 mx-6 md:mt-12">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl mb-4">
              {t("infosection.primary_1")}
            </h2>
            <h3 className="font-semibold text-lg md:text-xl">
              {t("infosection.secondary_1")}
            </h3>
            <p className="text-md md:text-lg">{t("infosection.info_text_1")}</p>

            <h3 className="font-semibold text-lg md:text-xl mt-4">
              {t("infosection.secondary_2")}
            </h3>
            <p className="text-md md:text-lg">{t("infosection.info_text_2")}</p>
          </div>

          {/* Second Section */}
          <div className="md:w-4/6 mx-6 my-12">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl mb-4">
              {t("infosection.primary_2")}
            </h2>
            <p className="text-md md:text-lg">{t("infosection.info_text_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
