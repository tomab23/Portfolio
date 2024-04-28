import React from 'react'
import flagFr from "../../assets/images/flags/Flag_of_France.svg";
import flagEn from "../../assets/images/flags/Flag_of_the_United_Kingdom.svg";
import { useTranslation } from 'react-i18next';

const FlagLanguage = ({ language }) => {

  const { t } = useTranslation();

    const text = language === "en" ? "EN" : "FR"

  return (
    <div>
      <div>
          <div className="flex items-center gap-1">
            <img src={language === "en" ? flagEn : flagFr} 
            alt={language === "en" ? t("flag.en") : t("flag.fr")} className="h-3" />
            <p className="text-sm">{text}</p>
          </div>
      </div>
    </div>
  );
}

export default FlagLanguage
