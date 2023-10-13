import React from 'react'

const ButtonVersionInfo = ({ version }) => {
  return (
    <div className='absolute'>
      <p className='cursor-pointer font-semibold ml-2 mt-2 hover:underline dark:text-zinc-300 text-slate-900'
      title='Version actuelle'>
        {version}
      </p>
    </div>
  )
}

export default ButtonVersionInfo

