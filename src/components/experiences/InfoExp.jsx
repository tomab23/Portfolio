import React from "react";
import { useTranslation } from "react-i18next";

const InfoExp = ({ children, date, title, latest }) => {

  const { t } = useTranslation();

  return (
      <div className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-300 dark:ring-slate-700 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <div className="flex items-center font-semibold mb-1 text-gray-900 dark:text-white">
          <p className="text-lg">{title}</p>
          {latest && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              {t("experience.latest")}
            </span>
          )}
        </div>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
          {date}
        </time>
        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
          {children}
        </div>

      </div>
  );
};

export default InfoExp;
