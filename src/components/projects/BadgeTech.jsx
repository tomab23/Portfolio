import React from 'react'

const BadgeTech = ({ tech }) => {
  return (
    <div className='dark:bg-gray-400 bg-white rounded-xl px-2'>
      <p className='dark:text-black'>{tech}</p>
    </div>
  )
}

export default BadgeTech
