import React from 'react'

const BadgeTech = ({ tech }) => {
  return (
    <div className='dark:bg-light bg-white rounded-xl px-2'>
      <p className='dark:text-dark-dark font-semibold text-dark-dark'>{tech}</p>
    </div>
  )
}

export default BadgeTech
