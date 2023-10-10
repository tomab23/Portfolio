import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar"
import About from "../components/aboutMe/About";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/skills/Skills";
import Footer from "../components/Footer";
import Projects from "../components/projects/Projects";
import ContactMe from "../components/contact/ContactMe";


const Home = () => {

    const { t } = useTranslation();

    console.log("screen", screen.width, screen.height)


  return (
    <div className="dark:bg-slate-700 min-h-screen">
      <Navbar />

      <h1 className="text-center dark:text-white text-slate-600 my-5">{t('title')}</h1>

      <ScrollToTop/>

      <div className="flex flex-col items-center gap-10">

      <About />

      <Skills />

      <Projects />

      <ContactMe />

      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential title</span></h1>

      </div>

      <Footer />

      

    </div>
  )
}

export default Home
