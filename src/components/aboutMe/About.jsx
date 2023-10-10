import LinkAbout from "./LinkAbout";
import pres from "../../assets/images/presentation.png"
import { Home } from 'lucide-react';
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();


  return (
    <div className="flex flex-col w-[65vw] gap-2">
      {/* INFOS */}
      <div className="flex items-center justify-between p-5 dark:text-white border border-slate-800 rounded-lg">
        <div className="w-[70%] flex flex-col gap-5">
          <h1 className="font-bold uppe">{t('about.title')}</h1>
          <div>
          <p>{t("about.p1.01")} <b>{t("about.p1.02")}</b> (<i>{t("about.p1.03")}</i>) {t("about.p1.04")}</p>
            <br />
            <p>{t("about.p2.01")} <b>{t("about.p2.02")}</b> {t("about.p2.03")}
            (<a href="#projects"><i className="hover:underline cursor-pointer">{t("about.p2.04")}</i></a>).</p>   
            <br />     
            <p><b>{t("about.p3.01")}</b>{t("about.p3.02")}<b>{t("about.p3.03")}</b>.
            </p>
          </div>
            <div className="flex gap-1">
          <Home />
          <p>France, Lille</p>
        </div>
        </div>
        <img src={pres} alt="" className="h-80 w-80" />
        {/* <div className="flex w-[50%] justify-center">
        <img src={pres} alt="" className="h-80 w-80" />
        </div> */}
      </div>

      {/* LINKS */}
      <LinkAbout />
    </div>
  );
};

export default About;
