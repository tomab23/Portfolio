import DarkMode from "./DarkMode"

const Navbar = () => {
  return (
    <div className="flex justify-center py-2">
      <div className="flex items-center justify-between bg-slate-600 w-[70vw] h-[5vh] rounded-3xl">
        {/* NAME */}
        <div className="px-5 text-white text-xl">
            <p className="cursor-default">Thomas Bartier</p>
        </div>
        {/* NAV */}
        <div className="flex justify-center gap-16 text-white text-xl mr-16">
            <p className="cursor-pointer hover:scale-105">a propos</p>
            <p className="cursor-pointer hover:scale-105">compétences</p>
            <p className="cursor-pointer hover:scale-105">projets</p> 
            <p className="cursor-pointer hover:scale-105">experiences</p>
            <p className="cursor-pointer hover:scale-105">contact</p>
        </div>
        {/* PARAMS */}
        <div className="px-5 justify-self-end ">
           <DarkMode /> 
        </div>
      </div>

    </div>
  )
}

export default Navbar
