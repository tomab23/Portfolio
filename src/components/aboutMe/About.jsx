import LinkAbout from "./LinkAbout";
import pres from "../../assets/images/presentation.png";
import { Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import MeFr from "./meFr";
import MeEn from "./meEn";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="flex flex-col xs:w-[82vw] sm:w-[65vw] gap-2">
      {/* INFOS */}
      <div className="flex xs:flex-col sm:flex-row items-center justify-between p-5 dark:text-white border border-slate-800 rounded-lg">
        <div className="xs:w-[90%] sm:w-[70%] flex flex-col gap-5">
          <h1 className="font-bold ">{t("about.title")}</h1>
          {localStorage.getItem("i18nextLng") === "en" ? <MeEn /> : <MeFr />}
          <div className="flex gap-1">
            <Home />
            <p>France, Lille</p>
          </div>
        </div>
        <img src={pres} rel="preload" alt="image" className="sm:h-80 sm:w-80" />
      </div>

      {/* LINKS */}
      <LinkAbout />
    </div>
  );
};

export default About;
