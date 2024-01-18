import { useEffect, useState } from "react"


const CardSkill = ({ children, name, title, color }) => {


  return (
    <div title={title} className="h-32 w-32 border border-black rounded-xl 
    flex flex-col justify-center items-center hover:scale-110 xs:p-3.5 sm:p-4 bg-white dark:bg-dark dark:hover:bg-dark-dark 
    max-sm:h-24 max-sm:w-24  max-sm:gap-1">
      {children}
      <p className={`${color} max-sm:text-xs `}>{name}</p>
    </div>
  )
}

export default CardSkill
