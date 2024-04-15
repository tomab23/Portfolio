import React from 'react'
import { Download } from 'lucide-react';
import pdfFr from "../../assets/pdf/CV_2024_fr.pdf"
import pdfEn from "../../assets/pdf/CV_2024_en.pdf"
import { useTranslation } from 'react-i18next';

const ButtonDownload = () => {

    const { t } = useTranslation();

    const pdf = localStorage.getItem("i18nextLng") === "en" ? pdfEn : pdfFr;

  return (
    <div className="flex justify-center mt-10">
    <button className="flex gap-2 p-2 border border-dark-light dark:border-white dark:text-white rounded-lg">
      <Download/>
      <a href={pdf} download="CV_Thomas_Bartier">
        {t("download") + " PDF"}
      </a>
    </button>
  </div>
  )
}

export default ButtonDownload
