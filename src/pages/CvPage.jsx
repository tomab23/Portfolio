import cv_img from "../assets/images/CV-tb.jpg"
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import ButtonBack from '../components/buttons/ButtonBack';
import Footer from '../components/Footer';

const CvPage = () => {

    const { t } = useTranslation();

    // useEffect(() => {
    //   if(localStorage.getItem("darkmode") === "dark") {
    //       document.documentElement.classList.add("dark");
    //   } else {
    //       document.documentElement.classList.remove("dark")
    //   }
    // }, [])

    
  return (
    <div className="dark:bg-slate-700 py-5">
      
      <div className='flex items-center justify-between px-20'>
        <ButtonBack/>
      <h1 className="dark:text-white text-slate-600 font-bold">{t('pagecv')}</h1>
      </div>
      {/* IMG CV */}
    <Suspense fallback={<h2>🌀 Loading...</h2>}>
    <div className='flex justify-center h-[70vw] '>
        <img src={cv_img} alt="mon cv" className='border border-slate-600 dark:border-none' loading="lazy"/>
      </div>
    </Suspense>
      <Footer />
    </div>
  )
}

export default CvPage
