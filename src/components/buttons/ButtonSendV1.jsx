import React from 'react'
import { useTranslation } from 'react-i18next';

const ButtonSendV1 = () => {

  const { t } = useTranslation();


  return (
    <div>
      <button type="submit" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 dark:border-blue-600 border-blue-400 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full dark:bg-blue-600 bg-blue-400 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full dark:text-blue-600 text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease">{t("contactme.send")}</span>
<span className="relative invisible">Button Text</span>
</button>
    </div>
  )
}

export default ButtonSendV1
