import React from "react";
import flagFr from "../../assets/images/flags/Flag_of_France.svg";
import flagEn from "../../assets/images/flags/Flag_of_the_United_Kingdom.svg"
import { useTranslation } from "react-i18next";

const LangueChoose = () => {

  const { t } = useTranslation();

  return (
    <div>
      <div>
        {localStorage.getItem("i18nextLng") === "en" ? (
          <div className="flex items-center gap-1">
            <img src={flagEn} 
            alt={t("flag.en")} className="h-3" />
            <p className="text-sm">EN</p>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <img src={flagFr}
            alt={t("flag.fr")} className="h-3"/>
            <p className="text-sm">FR</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LangueChoose;
