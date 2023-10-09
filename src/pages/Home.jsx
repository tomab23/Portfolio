import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar"
import About from "../components/aboutMe/About";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/skills/Skills";
import Footer from "../components/Footer";


const Home = () => {

    const { t } = useTranslation();

    console.log("screen", screen.width, screen.height)


  return (
    <div className="dark:bg-slate-700 min-h-screen ">
      <Navbar />

      <h1 className="text-center dark:text-white text-slate-600 my-5">{t('title')}</h1>

      <ScrollToTop/>

      <div className="flex flex-col items-center gap-10">

      <About />

      <Skills />
      </div>

      <Footer />
    </div>
  )
}

export default Home
