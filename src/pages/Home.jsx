import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar"
import About from "../components/aboutMe/About";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/skills/Skills";
import Footer from "../components/layout/Footer";
import Projects from "../components/projects/Projects";
import ContactMe from "../components/contact/ContactMe";
import CustomTitle from "../components/custom/CustomTitle";
import ButtonVersionInfo from "../components/alpha-beta/ButtonVersionInfo";
import Experiences from './../components/experiences/Experiences';
import NavBarMobile from "../components/layout/NavBarMobile";


const Home = () => {

    const { t } = useTranslation();

    console.log("screen", screen.width, screen.height)


  return (
    <div className="dark:bg-backApp-dark bg-backApp-light min-h-screen">
      <ButtonVersionInfo version={"Version 0.2.4"}/>

      {window.innerWidth > 900 ?  
      <Navbar /> 
      :
      <div className="xs:pt-4 sm:pt-4">
        <NavBarMobile />
      </div>
      }
      

      {/* <h1 className="text-center dark:text-white text-slate-600 my-5">{t('title')}</h1> */}
      <CustomTitle className={"text-center text-4xl mt-5 mb-10"}>{t('title')}</CustomTitle>
      

      <p className="dark:text-white text-center mb-5 italic">📱 {t("phone")} 📱</p>
      <p className="dark:text-white text-center mb-5 italic">⚠️ {t("alert")} ⚠️</p>


      <ScrollToTop/>

      <div className="flex flex-col items-center gap-10">

      <About />

      <Skills />

      <Projects />

      <Experiences/>

      <ContactMe />

      </div>

      <Footer />

      

    </div>
  )
}

export default Home
