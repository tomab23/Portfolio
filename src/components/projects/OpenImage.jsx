import React from "react";
import { X } from "lucide-react";

const OpenImage = ({ handleOpenImage, imgOpen }) => {
  return (
    // top-5 left-64
    <div className="fixed translate-x-[20%] translate-y-0 3xl:translate-x-[25%] 3xl:translate-y-[5%]
    w-[1000px] 3xl:w-[1200px]  bg-dark-light pb-3 pl-2 rounded-xl">
      <div className="flex justify-end">
        <X
          className="cursor-pointer mr-2 mt-2"
          color="white"
          onClick={handleOpenImage}
        />
      </div>
      <img
        src={imgOpen}
        alt="image du projet agrandit"
        className=" w-[95%] h-[80%]"
      />
    </div>
  );
};

export default OpenImage;
