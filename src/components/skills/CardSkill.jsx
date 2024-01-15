import { useEffect, useState } from "react"


const CardSkill = ({ children, name, title, color }) => {


  return (
    <div title={title} className="h-32 w-32 border border-black rounded-xl flex flex-col justify-center items-center hover:scale-110 p-4 bg-white dark:bg-dark dark:hover:bg-dark-dark ">
      {children}
      <p className={`${color}`}>{name}</p>
    </div>
  )
}

export default CardSkill
