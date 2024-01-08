import React from 'react'
import { useTranslation } from 'react-i18next';
import NetworkFooter from '../NetworkFooter';

const Footer = () => {

    const { t } = useTranslation();

  return (
    <div className='flex flex-col mt-10'>
      <div className='border border-slate-800 dark:border-white w-[65%] self-center'></div>
      <div className='flex justify-around p-2 dark:text-white text-slate-800
      max-sm:flex-col-reverse max-sm:items-center max-sm:gap-5 max-sm:mt-2 max-lg:pb-20'>
        <p className='font-semibold'>{t("footer")}</p>
        <NetworkFooter />
      </div>
    </div>
  )
}

export default Footer
