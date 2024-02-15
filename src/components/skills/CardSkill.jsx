import { useEffect, useState } from "react"


const CardSkill = ({ children, name, title, type}) => {

  const typeColor = {
    react: 'text-skill-react',
    javascript: 'dark:text-skill-javascript text-yellow-500',
    typescript: 'text-skill-typescript',
    java: 'text-skill-java',
    spring: 'text-skill-spring',
    i18n: 'text-skill-i18n',
    tailwind: 'text-skill-tailwind'
  }


  return (
    <div title={title} className="h-32 w-32 border border-black rounded-xl 
    flex flex-col justify-center items-center hover:scale-110 xs:p-3.5 sm:p-4 bg-white dark:bg-dark dark:hover:bg-dark-dark 
    max-sm:h-24 max-sm:w-24  max-sm:gap-1">
      {children}
      <p className={`${typeColor[type]} max-sm:text-xs `}>{name}</p>
    </div>
  )
}

export default CardSkill
