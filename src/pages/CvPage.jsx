import { ChevronLeftCircle } from 'lucide-react';
import cv_img from "../assets/images/CV_tb.jpg"
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const CvPage = () => {

    const { t } = useTranslation();

    useEffect(() => {
      if(localStorage.getItem("darkmode") === "dark") {
          document.documentElement.classList.add("dark");
      } else {
          document.documentElement.classList.remove("dark")
      }
    }, [])
    
  return (
    <div className="dark:bg-slate-700 py-5">
      
      <div className='flex items-center justify-between px-20'>
        <ChevronLeftCircle size={35} className='cursor-pointer hover:scale-125 dark:text-white text-slate-600'
        onClick={() => history.back()} />
      <h1 className="dark:text-white text-slate-600 font-bold">{t('home.pagecv')}</h1>
      </div>
      {/* IMG CV */}
      <div className='flex justify-center h-[70vw] '>
        <img src={cv_img} alt="mon cv" className='border border-slate-600 dark:border-none'/>
      </div>
    </div>
  )
}

export default CvPage
