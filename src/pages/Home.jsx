import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar"


const Home = () => {

    const { t } = useTranslation();


  return (
    <div className="dark:bg-slate-700 h-[200vh]">
      <Navbar />

      <h1 className="text-center dark:text-white text-slate-600 mt-5">{t('title')}</h1>
    </div>
  )
}

export default Home
