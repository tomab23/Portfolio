import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const LoaderCercle = () => {
  return (
    <div className='flex justify-center mt-40'>
      <ClipLoader color="#36d7b7" loading={true} size={150} />
    </div>
  )
}

export default LoaderCercle
