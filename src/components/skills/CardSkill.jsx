


const CardSkill = ({ children, name, title, color }) => {

  return (
    <div title={title} className="h-32 w-32 border border-black rounded-xl flex flex-col justify-center items-center hover:scale-110 p-4 bg-black hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-800 ">
      {children}
      <p className={`text-[${color}]`}>{name}</p>
    </div>
  )
}

export default CardSkill
