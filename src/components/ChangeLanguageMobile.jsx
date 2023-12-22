import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const ChangeLanguageMobile = () => {
  
    const { i18n } = useTranslation();
  
    function isoToEmoji(code) {
      return code
        .split("")
        .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
        .map((n) => String.fromCodePoint(n))
        .join("");
    }
  
    const [traduction, setTraduction] = useState("");
    const [language, setLanguage] = useState(isoToEmoji(traduction));
  
    useEffect(() => {
      if(localStorage.getItem("i18nextLng") === "fr-FR") {
        setTraduction("fr")
      } else if (localStorage.getItem("i18nextLng") === "fr") {
        setTraduction("fr")
      } else {
        // setTraduction("en")
        setTraduction("gb")
      }
    }, [language])
  
    const changeLanguage = (code) => {
      setLanguage(isoToEmoji(code));
      if(code === "en") {
          i18n.changeLanguage('en') 
          localStorage.setItem('i18nextLng', "en")
      } else {
          i18n.changeLanguage("fr")
          localStorage.setItem('i18nextLng', "fr")
      }
      setIsOpen(false);
    };
    

  return (
    <div className='flex gap-10 py-5 px-4'>
        <div>
            <h1>{isoToEmoji(traduction)}</h1>
        </div>
        <div className='flex gap-3'>
            <h1 onClick={() => changeLanguage("fr")} className='cursor-pointer'>{isoToEmoji("fr")}</h1>
            <p className='font-bold'>|</p>
            <h1 onClick={() => changeLanguage("en")} className='cursor-pointer'>{isoToEmoji("gb")}</h1>
        </div>
    </div>
  )
}

export default ChangeLanguageMobile
