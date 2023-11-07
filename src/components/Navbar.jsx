import DarkMode from "./DarkMode"
import DropdownLanguage from "./DropdownLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const { t } = useTranslation();


  return (
    <div className="flex justify-center py-3">
      <div className="flex items-center justify-between bg-slate-600 xl:w-[65vw] h-[5vh] rounded-3xl
      text-white text-xl">
        {/* NAME */}
        <div className="pl-5">
            <h2 className="cursor-default w-44 uppercase hover:scale-y-150">Thomas Bartier</h2>
        </div>
        {/* NAV */}
        <div className="flex justify-center gap-10 text-lg">
          {/* TODO: text-lg en attendant le responsive && gap-14 de base */}
            <a className="cursor-pointer hover:scale-105">{t('navbar.about')}</a>
            <a href="#skills" className="cursor-pointer hover:scale-105">{t('navbar.skills')}</a> 
            <a href="#projects" className="cursor-pointer hover:scale-105">{t('navbar.projects')}</a>
            <a href="#exp" className="cursor-pointer hover:scale-105">{t('navbar.exp')}</a>
            <a href="#contact" className="cursor-pointer hover:scale-105">{t('navbar.contact')}</a>
        </div>
        {/* PARAMS */}
        <div className=" flex justify-end items-center w-44 ">
           <DarkMode /> 
           <DropdownLanguage />
        </div>
      </div>

    </div>
  )
}

export default Navbar
