import { ChevronLeftCircle } from 'lucide-react'
import React from 'react'

const ButtonBack = () => {
  return (
    <>
    <ChevronLeftCircle size={35} className='cursor-pointer hover:scale-125 dark:text-white text-slate-600'
        onClick={() => history.back()} />  
    </>
  )
}

export default ButtonBack
