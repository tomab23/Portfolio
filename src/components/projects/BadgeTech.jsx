import React from 'react'

const BadgeTech = ({ tech }) => {
  return (
    <div className='dark:bg-light bg-slate-50  rounded-xl px-2 border border-black shadow-md'>
      <p className='dark:text-dark-dark font-semibold text-dark-dark'>{tech}</p>
    </div>
  )
}

export default BadgeTech
