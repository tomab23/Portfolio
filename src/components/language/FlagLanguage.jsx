import React from 'react'
import flagFr from "../../assets/images/flags/Flag_of_France.svg";
import flagEn from "../../assets/images/flags/Flag_of_the_United_Kingdom.svg";

const FlagLanguage = ({ language }) => {

    const text = language === "en" ? "EN" : "FR"

  return (
    <div>
      <div>
          <div className="flex items-center gap-1">
            <img src={language === "en" ? flagEn : flagFr} alt="" className="h-3" />
            <p className="text-sm">{text}</p>
          </div>
      </div>
    </div>
  );
}

export default FlagLanguage
