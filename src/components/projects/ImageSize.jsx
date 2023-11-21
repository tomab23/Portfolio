import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next';

const ImageSize = ({img}) => {

  const { t } = useTranslation();


  return (
    // <div className=' hover:scale-125'>
      <div>
      <Suspense>
      <img src={img} alt={t("project.alt")}  className='xl:h-72' loading='lazy' />
      </Suspense>
    </div>
  )
}

export default ImageSize
