import React from 'react'
import CustomTitle from '../custom/CustomTitle';
import { useTranslation } from 'react-i18next';

const Experiences = () => {

    const { t } = useTranslation();


  return (
    <div id="exp" className="w-[65vw] flex flex-col justify-start gap-5 mt-10">
        <CustomTitle className={"text-3xl mt-5 mb-10"}>{t('navbar.exp')}</CustomTitle>
      
    </div>
  )
}

export default Experiences
