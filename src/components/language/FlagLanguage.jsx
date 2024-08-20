import React from "react";
import flagFr from "../../assets/images/flags/Flag_of_France.svg";
import flagEn from "../../assets/images/flags/Flag_of_the_United_Kingdom.svg";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const FlagLanguage = ({ language }) => {
  const { t } = useTranslation();

  const text = language === "en" ? "EN" : "FR";

  return (
    <div>
      <div>
        <div className="flex items-center gap-1">
          {/* <img src={language === "en" ? flagEn : flagFr} 
            alt={language === "en" ? t("flag.en") : t("flag.fr")} className="h-3" /> */}
          {language === "en" ? (
            <ReactCountryFlag
              countryCode="GB"
              svg
              alt={t("flag.en")}
              title={t("flag.en")}
            />
          ) : (
            <ReactCountryFlag
              countryCode="FR"
              svg
              alt={t("flag.fr")}
              title={t("flag.fr")}
            />
          )}
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlagLanguage;
