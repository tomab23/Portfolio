import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonVersionInfo = ({ version }) => {

  const navigate = useNavigate();

  return (
    <div className='absolute xs:mt-20 sm:mt-0'>
      <p className='cursor-pointer font-semibold ml-2 mt-2 hover:underline dark:text-zinc-300 text-slate-900'
      title='Version actuelle'
      onClick={() => navigate("/versions")}>
        {version}
      </p>
    </div>
  )
}

export default ButtonVersionInfo

