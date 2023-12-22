import React, { useEffect, useState } from 'react'
import { ChevronDownIcon } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import DropdownLanguage from '../DropdownLanguage';
import ChangeLanguageMobile from '../ChangeLanguageMobile';
import DarkModeMobile from '../DarkModeMobile';

const MenuNavBarMobile = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const menuItems = [
      { label: t('navbar.about'), url: "#about" },
      { label: t('navbar.skills'), url: "#skills" },
      { label: t('navbar.projects'), url: "#projects" },
      { label: t('navbar.exp'), url: "#exp" },
      { label: t('navbar.contact'), url: "#contact" },
    ];




  return (
    <nav>
        <div className="relative inline-block text-left">
    <div>
      {/* <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Menu
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </button> */}

<div
        className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium">
        {!isOpen ? 
        <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} /> 
        :
        <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
        }
      </div>
    </div>

    {isOpen && (
      <div
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-gray-700"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <ChangeLanguageMobile />
        <DarkModeMobile/>
      </div>
    )}
  </div>
    </nav>
  )
}

export default MenuNavBarMobile
