import React from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import { useTranslation } from "react-i18next";
import ReleaseNote from "../components/alpha-beta/ReleaseNote";
import Version_0_1 from "../components/alpha-beta/Version_0_1";

const Versions = () => {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-slate-700 min-h-screen px-20 py-5 dark:text-white">
      <div className="flex gap-10">
        <ButtonBack />
        <h1 className="font-mono">{t("version")}</h1>
      </div>

      {/* <div className="ml-20 mt-10 flex gap-5">
        <p className="cursor-pointer border border-slate-600 bg-slate-600 p-1.5 rounded-lg hover:bg-slate-900">
          Versions a venir
        </p>
        <p className="cursor-pointer border border-slate-600 bg-slate-600 p-1.5 rounded-lg hover:bg-slate-900">
          Versions passée
        </p>
      </div> */}

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
          <h2 className="font-serif" id="futur">Versions a venir :</h2>
        </div>

        {/* Past release note */}
        {/* <div>
        <h2  id='past'>Anciennes versions :</h2>
      </div> */}
      </div>
    </div>
  );
};

export default Versions;
