import DarkMode from "./DarkMode"
import DropdownLanguage from "./tests/DropdownLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const { t } = useTranslation();


  return (
    <div className="flex justify-center py-2">
      <div className="flex items-center justify-between bg-slate-600 xl:w-[65vw] h-[5vh] rounded-3xl
      text-white text-xl">
        {/* NAME */}
        <div className="pl-5">
            <h2 className="cursor-default w-44 uppercase hover:scale-y-125">Thomas Bartier</h2>
        </div>
        {/* NAV */}
        <div className="flex justify-center gap-14">
            <p className="cursor-pointer hover:scale-105">{t('navbar.about')}</p>
            <p className="cursor-pointer hover:scale-105">{t('navbar.skills')}</p>
            <p className="cursor-pointer hover:scale-105">{t('navbar.exp')}</p> 
            <p className="cursor-pointer hover:scale-105">{t('navbar.projects')}</p>
            <p className="cursor-pointer hover:scale-105">{t('navbar.contact')}</p>
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
