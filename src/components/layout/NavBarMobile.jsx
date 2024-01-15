import React from "react";
import { useTranslation } from "react-i18next";
import MenuNavBarMobile from "./MenuNavBarMobile";

const NavBarMobile = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div
        className="flex items-center justify-between bg-dark-light mx-2 px-2 h-[5vh] rounded-3xl
    text-white text-sm"
      >
        <h2 className="cursor-default w-44 uppercase hover:scale-y-150">
          Thomas Bartier
        </h2>
        <MenuNavBarMobile t={t} />
      </div>
    </header>
  );
};

export default NavBarMobile;
