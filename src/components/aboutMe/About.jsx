import LinkAbout from "./LinkAbout";
import pres from "../../assets/images/presentation.png"

const About = () => {
  return (
    <div className="flex flex-col w-[65vw] gap-2">
      {/* INFOS */}
      <div className="items-center flex p-5 dark:text-white border border-slate-800 rounded-lg">
        <div className="w-[40%]">
          <p>Après avoir découvert le développement en mai 2022 pendant 5 semaines, je suis partie sur une CDA (formation 
            concepteur développeur d'application) durant 8 mois.
            Après obtention du diplôme j'ai intégré un incubateur et une équipe pendant 4 mois où j'ai 
            travaillé sur un projet de covoiturage (CoDrive) en mise situation professionnel (voir mes experiences).
            Aujourd'hui, je suis en recherche d'emploi autour de Lille ou plus loin et je suis disponible immédiatement.
            </p>
        </div>
        <img src={pres} alt="" className="h-80 w-80" />
      </div>

      {/* LINKS */}
      <LinkAbout />
    </div>
  );
};

export default About;
