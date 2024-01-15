import React from 'react'

const BadgeTech = ({ tech }) => {
  return (
    <div className='dark:bg-light bg-dark rounded-xl px-2'>
      <p className='dark:text-dark-dark font-semibold text-white'>{tech}</p>
    </div>
  )
}

export default BadgeTech
