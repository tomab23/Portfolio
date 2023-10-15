import React from 'react'

const ReleaseNote = ({ version, children }) => {
  return (
    <div className='mt-2'>
    <h2 className='font-bold'>{version}</h2>
      <div className='font-mono'>
      {children}
      </div>
    </div>
  )
}

export default ReleaseNote
