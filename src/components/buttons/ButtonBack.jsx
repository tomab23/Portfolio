import { ChevronLeftCircle } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonBack = ({ nav }) => {

  const navigate = useNavigate();

  const goBack = () => {
    if(!nav) {
      history.back()
    } else {
      navigate("/")
    }
  }

  return (
    <>
    <ChevronLeftCircle size={35} className='cursor-pointer hover:scale-125 dark:text-white text-slate-600'
        onClick={goBack} />  
    </>
  )
}

export default ButtonBack
