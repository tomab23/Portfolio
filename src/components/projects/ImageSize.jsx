import React, { Suspense } from 'react'

const ImageSize = ({img}) => {
  return (
    <div className=' hover:scale-125'>
      <Suspense>
      <img src={img} alt="" className='xl:h-72' />
      </Suspense>
    </div>
  )
}

export default ImageSize
