import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import DarkMode from "../DarkMode";
import ChangeLanguage from "../ChangeLanguage";

const MenuNavBarMobile = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: t("navbar.about"), url: "#about" },
    { label: t("navbar.skills"), url: "#skills" },
    { label: t("navbar.projects"), url: "#projects" },
    { label: t("navbar.exp"), url: "#exp" },
    { label: t("navbar.contact"), url: "#contact" },
  ];

  return (
    <nav>
      <div className="relative inline-block text-left">
        <div>
          <div className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium">
            {!isOpen ? (
              <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
            ) : (
              <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
        </div>

        {isOpen && (
          <div
          // divide-y divide-gray-100 
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-dark-light ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="block px-4 py-2 text-sm hover:bg-slate-500 text-white"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ChangeLanguage mobile={true} />
            <div className="flex justify-center">
              <DarkMode mobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuNavBarMobile;
