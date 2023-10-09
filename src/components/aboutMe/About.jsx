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
          <p>Après avoir découvert le développement en mai 2022 pendant 5 semaines, je suis partie sur une <b>CDA</b> (<i>formation 
            concepteur développeur d'application</i>) durant 8 mois.</p>
            <br />
            <p>Après <b>obtention du diplôme</b> j'ai intégré un incubateur et une équipe pendant 4 mois où j'ai 
            travaillé sur un projet de covoiturage (CoDrive) en mise en situation professionnel 
            (<a href="#"><i className="hover:underline cursor-pointer">voir mes experiences</i></a>).</p>   
            <br />     
            <p><b>Aujourd'hui</b>, je suis en recherche d'emploi et je suis disponible immédiatement.
            </p>
          </div>
            <div className="flex gap-1">
          <Home/>
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
