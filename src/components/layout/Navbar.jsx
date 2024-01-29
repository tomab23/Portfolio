import DarkMode from "../DarkMode"
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../ChangeLanguage";

const Navbar = () => {

  const { t } = useTranslation();

  // const [stickyClass, setStickyClass] = useState('relative');

  // useEffect(() => {
  //   window.addEventListener('scroll', stickNavbar);

  //   return () => {
  //     window.removeEventListener('scroll', stickNavbar);
  //   };
  // }, []);

  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 50 ? setStickyClass('fixed top-3 z-50') : setStickyClass('relative');
  //   }
  // };


  return (
    <nav className="flex justify-center py-3">
      {/* ${stickyClass} */}
      <div className={`flex items-center justify-between max-3xl:gap-10 bg-dark-light h-[5vh] rounded-3xl
      text-white text-xl 
      max-lg:w-[90vw] xl:w-[65vw]`}>
        {/* NAME */}
        <div className="pl-5">
            <h2 className="cursor-default 3xl:w-44 uppercase hover:scale-y-150">Thomas Bartier</h2>
        </div>
        {/* NAV */}
        <div className="flex justify-center gap-5 2xl:gap-10 3xl:gap-12 text-lg">
            <a href="#about" className="cursor-pointer hover:scale-105">{t('navbar.about')}</a>
            <a href="#skills" className="cursor-pointer hover:scale-105">{t('navbar.skills')}</a> 
            <a href="#projects" className="cursor-pointer hover:scale-105">{t('navbar.projects')}</a>
            <a href="#exp" className="cursor-pointer hover:scale-105">{t('navbar.exp')}</a>
            <a href="#contact" className="cursor-pointer hover:scale-105">{t('navbar.contact')}</a>
        </div>
        {/* PARAMS */}
        <div className=" flex justify-end items-center 3xl:w-44 ">
           <DarkMode /> 
           <ChangeLanguage />
        </div>
      </div>

    </nav>
  )
}

export default Navbar
