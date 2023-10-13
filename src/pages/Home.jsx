import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar"
import About from "../components/aboutMe/About";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/skills/Skills";
import Footer from "../components/Footer";
import Projects from "../components/projects/Projects";
import ContactMe from "../components/contact/ContactMe";
import CustomTitle from "../components/custom/CustomTitle";
import ButtonVersionInfo from "../components/alpha-beta/ButtonVersionInfo";


const Home = () => {

    const { t } = useTranslation();

    console.log("screen", screen.width, screen.height)


  return (
    <div className="dark:bg-slate-700 min-h-screen">
      <ButtonVersionInfo version={"Beta 1.0"}/>
      <Navbar />

      {/* <h1 className="text-center dark:text-white text-slate-600 my-5">{t('title')}</h1> */}
      <CustomTitle className={"text-center text-4xl mt-5 mb-10"}>{t('title')}</CustomTitle>

      <ScrollToTop/>

      <div className="flex flex-col items-center gap-10">

      <About />

      <Skills />

      <Projects />

      <ContactMe />

      </div>

      <Footer />

      

    </div>
  )
}

export default Home
