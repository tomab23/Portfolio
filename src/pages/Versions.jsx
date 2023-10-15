import React from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import { useTranslation } from "react-i18next";
import ReleaseNote from "../components/alpha-beta/ReleaseNote";
import Version_0_1 from "../components/alpha-beta/Version_0_1";
import ScrollToTop from "../components/ScrollToTop";

const Versions = () => {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-slate-700 min-h-screen px-20 py-5 dark:text-white">
      <div className="flex gap-10">
        <ButtonBack nav={true} />
        <h1 className="font-mono">{t("version")}</h1>
      </div>

      <div className="ml-20 mt-10 flex gap-5">
        <a href="#futur" 
        className="cursor-pointer border border-slate-600 dark:bg-slate-600 p-1.5 rounded-lg dark:hover:bg-slate-900 hover:bg-slate-200">
          Versions à venir
        </a>
        <a href="#past" 
        className="cursor-pointer border border-slate-600 dark:bg-slate-600 p-1.5 rounded-lg dark:hover:bg-slate-900 hover:bg-slate-200">
          Versions passées
        </a>
      </div>

      {/* Actual release note */}
      <div className="px-20 mt-10">
        <div>
          <h2>Version actuelle :</h2>
          <ReleaseNote version={"version 0.1"}>
            <Version_0_1/>
          </ReleaseNote>
        </div>

        {/* Futur release note */}
        <div className="my-20">
          <h2 id="futur">Versions à venir :</h2>
          <ReleaseNote version={"version 0.2"}>
            <p>- Partie experiences présente (sans toutes les informations)</p>
            <p>- Partie contact (non fonctionnelle)</p>
            <p>- Choix des cartes de projets</p>
          </ReleaseNote>

          <ReleaseNote version={"version 0.3"}>
            <p>- Contact fonctionnel (envoie + traduction)</p>
            <p>- Mes experiences mise à jour en français</p>
            <p>- Mes projets (carte + page information) mis à jour en français</p>
          </ReleaseNote>

          <ReleaseNote version={"version 0.4"}>
            <p>- Traduction total (application + cv)</p>
            <p>- Responsive</p>
            <p>- Light mode</p>
          </ReleaseNote>
        </div>

        {/* Past release note */}
        <div>
        <h2  id='past'>Anciennes versions :</h2>
      </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Versions;