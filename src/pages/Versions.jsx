import React from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import { useTranslation } from "react-i18next";
import ReleaseNote from "../components/alpha-beta/ReleaseNote";
import ScrollToTop from "../components/ScrollToTop";
import Version_0_1 from "../versions/Version_0_1";
import Version_0_4 from './../versions/Version_0_4';
import Version_0_3 from "../versions/Version_0_3";
import Version_0_2 from "../versions/Version_0_2";
import Version_0_2_1 from "../versions/Version_0_2_1";

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
          {t("release.future")}
        </a>
        <a href="#past" 
        className="cursor-pointer border border-slate-600 dark:bg-slate-600 p-1.5 rounded-lg dark:hover:bg-slate-900 hover:bg-slate-200">
          {t("release.old")}
        </a>
      </div>

      {/* Actual release note */}
      <div className="px-20 mt-10">
        <div>
          <h2>{t("release.current")} :</h2>
          <ReleaseNote version={"version 0.2.1"}>
          <Version_0_2_1/>
          </ReleaseNote>
        </div>

        {/* Futur release note */}
        <div className="my-20">
          <h2 id="futur">{t("release.future")} :</h2>

          <ReleaseNote version={"version 0.3"}>
            <Version_0_3/>
          </ReleaseNote>

          <ReleaseNote version={"version 0.4"}>
            <Version_0_4/>
          </ReleaseNote>
        </div>

        {/* Past release note */}
        <div>
        <h2  id='past'>{t("release.old")} :</h2>
        <ReleaseNote version={"version 0.2"}>
          <Version_0_2/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.1"}>
            <Version_0_1/>
          </ReleaseNote>
      </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Versions;
