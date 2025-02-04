import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LangueChoose from "./LangueChoose";
import FlagLanguage from './FlagLanguage';

const ChangeLanguage = ({ mobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const { i18n } = useTranslation();

  function isoToEmoji(code) {
    return code
      .split("")
      .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
      .map((n) => String.fromCodePoint(n))
      .join("");
  }

  const [traduction, setTraduction] = useState("");
  const [language, setLanguage] = useState(isoToEmoji(traduction));

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") === "en") {
      setTraduction("gb");
    } else {
      setTraduction("fr");
    }
  }, [language]);

  const changeLanguage = (code) => {
    setLanguage(isoToEmoji(code));
    if (code === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("i18nextLng", "en");
    } else {
      i18n.changeLanguage("fr");
      localStorage.setItem("i18nextLng", "fr");
    }
    setIsOpen(false);
  };

  return (
    <div>
      {!mobile ? (
        // Dropdonw to change language
        <div className="relative">
          <button
            className="flex items-center justify-center mx-4 rounded-md"
            onClick={toggleDropdown}
          >
            {/* <p className="mb-1">{isoToEmoji(traduction)}</p> */}
            <LangueChoose />

            <svg
              className={`ml-1 w-4 h-4 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute w-20 rounded-md shadow-lg mt-3 3xl:mt-4 bg-slate-600 ">
              <ul className="py-2 ">
                <li
                  className="px-4 py-2 cursor-pointer dark:hover:bg-slate-700 hover:bg-slate-500"
                  onClick={() => changeLanguage("fr")}
                >
                  {/* {isoToEmoji("fr")} */}
                  <FlagLanguage language={"fr"} />
                </li>
                <li
                  className="px-4 py-2 cursor-pointer dark:hover:bg-slate-700 hover:bg-slate-500"
                  onClick={() => changeLanguage("en")}
                >
                  {/* {isoToEmoji("gb")} */}
                  <FlagLanguage language={"en"} />
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        // Mobile choice for language
        <div className="flex gap-10 py-5 px-4 text-white">
          <div>
            <h1>{isoToEmoji(traduction)}</h1>
          </div>
          <div className="flex gap-3">
            <h1 onClick={() => changeLanguage("fr")} className="cursor-pointer">
              {isoToEmoji("fr")}
            </h1>
            <p className="font-bold">|</p>
            <h1 onClick={() => changeLanguage("en")} className="cursor-pointer">
              {isoToEmoji("gb")}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
