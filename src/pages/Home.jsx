import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar"
import About from "../components/aboutMe/About";


const Home = () => {

    const { t } = useTranslation();

    console.log("screen", screen.width, screen.height)


  return (
    <div className="dark:bg-slate-700 h-[200vh]">
      <Navbar />

      <h1 className="text-center dark:text-white text-slate-600 my-5">{t('title')}</h1>

      <div className="flex flex-col items-center">
      <About />
      </div>
    </div>
  )
}

export default Home
