import DarkMode from "./DarkMode"
import DropdownLanguage from "./tests/DropdownLanguage";

const Navbar = () => {
  return (
    <div className="flex justify-center py-2">
      <div className="flex items-center justify-between bg-slate-600 xl:w-[70vw] h-[5vh] rounded-3xl
      text-white text-xl">
        {/* NAME */}
        <div className="pl-5">
            <p className="cursor-default w-36">Thomas Bartier</p>
        </div>
        {/* NAV */}
        <div className="flex justify-center gap-16">
            <p className="cursor-pointer hover:scale-105">a propos</p>
            <p className="cursor-pointer hover:scale-105">compétences</p>
            <p className="cursor-pointer hover:scale-105">projets</p> 
            <p className="cursor-pointer hover:scale-105">experiences</p>
            <p className="cursor-pointer hover:scale-105">contact</p>
        </div>
        {/* PARAMS */}
        <div className=" flex justify-end items-center w-36 ">
           <DarkMode /> 
           <DropdownLanguage />
        </div>
      </div>

    </div>
  )
}

export default Navbar
