import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

const ImageSize = ({ img, open, setImgOpen }) => {
  const { t } = useTranslation();

  const imgOpen = (open) => {
    open();
    setImgOpen(img);
  };



  return (
    // <div className=' hover:scale-125'>
    <div>
      <Suspense>
        <img
          src={img}
          alt={t("project.alt")}
          className={window.innerWidth > 1200 ? "xl:h-72 cursor-pointer" : "xl:h-72" }
          loading="lazy"
          onClick={() => imgOpen(open)}
        />
      </Suspense>
    </div>
  );
};

export default ImageSize;
