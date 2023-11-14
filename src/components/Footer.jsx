import React from 'react'
import { useTranslation } from 'react-i18next';
import NetworkFooter from './NetworkFooter';

const Footer = () => {

    const { t } = useTranslation();

  return (
    <div className='flex flex-col mt-10'>
      <div className='border border-slate-800 dark:border-white w-[65%] self-center'></div>
      <div className='flex justify-around p-2 dark:text-white text-slate-800'>
        <p className='font-semibold'>{t("footer")}</p>
        {/* <div className='flex gap-5'>
            <a href="https://twitter.com/toma_23_" className='cursor-pointer hover:underline'>Twitter</a>
            <a href="https://github.com/tomab23" className='cursor-pointer hover:underline'>Github</a>
            <a href="https://www.linkedin.com/in/thomas-bartier-185752138/" className='cursor-pointer hover:underline'>LinkedIn</a>
        </div> */}

        <div>
          <NetworkFooter />
        </div>
      </div>
    </div>
  )
}

export default Footer
