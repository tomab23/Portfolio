import React from "react";
import { useTranslation } from "react-i18next";
import LoaderCercle from "../loader/LoaderCercle";
import { X } from 'lucide-react';

const ButtonSend = ({ loading }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-5">
      <button
        type="submit"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-600 rounded-full shadow-md group"
        disabled={!loading ? false : true}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
        {!loading ? 
                  <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg> 
          :
          <X/>}
        </span>
        <span className="absolute flex items-center justify-center w-full h-full dark:text-white text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
          {!loading ? t("contactme.send") : t("contactme.sending")}
        </span>
        <span className="relative invisible">Button Text</span>
      </button>
      {loading && 
            <div className="mt-3">
            <LoaderCercle size={25}/>
          </div>
      }
    </div>
  );
};

export default ButtonSend;
