import React from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import { useTranslation } from "react-i18next";
import ReleaseNote from "../components/alpha-beta/ReleaseNote";
import ScrollToTop from "../components/buttons/ScrollToTop";
import Version_0_1 from "../versions/Version_0_1";
import Version_0_4 from './../versions/Version_0_4';
import Version_0_3 from "../versions/Version_0_3";
import Version_0_2 from "../versions/Version_0_2";
import Version_0_2_1 from "../versions/Version_0_2_1";
import Version_0_2_2 from "../versions/Version_0_2_2";
import Version_0_5 from "../versions/Version_0_5";
import Version_0_2_3 from "../versions/Version_0_2_3";
import Version_0_2_4 from "../versions/Version_0_2_4";
import Version_0_2_5 from "../versions/Version_0_2_5";
import Version_0_6 from './../versions/Version_0_6';
import Version_0_2_6 from "../versions/Version_0_2_6";
import Version_0_7 from './../versions/Version_0_7';
import Version_0_3_1 from "../versions/Version_0_3_1";
import Version_0_8 from "../versions/Version_0_8";
import Version_0_9 from "../versions/Version_0_9";
import Version_0_5_1 from "../versions/Version_0_5_1";
import Version_0_5_2 from "../versions/Version_0_5_2";


const Versions = () => {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-dark bg-light min-h-screen xs:px-2 sm:px-20 py-5 dark:text-white">
      <div className="flex gap-5 ml-2">
        <ButtonBack nav={true} />
        <h1 className="font-mono">{t("version")}</h1>
      </div>

      <div className="xs:ml-8 sm:ml-20 mt-10 flex gap-5">
        <a href="#futur" 
        className="cursor-pointer border border-dark-light dark:bg-dark-light p-1.5 rounded-lg dark:hover:bg-slate-900 hover:bg-slate-200">
          {t("release.future")}
        </a>
        <a href="#past" 
        className="cursor-pointer border border-dark-light dark:bg-dark-light p-1.5 rounded-lg dark:hover:bg-slate-900 hover:bg-slate-200">
          {t("release.old")}
        </a>
      </div>

      {/* Actual release note */}
      <div className="xs:px-8 sm:px-20 mt-10 max-sm:text-sm">
        <div>
          <h2>{t("release.current")} :</h2>
          <ReleaseNote version={"version 0.5"}>
            <Version_0_5/>
          </ReleaseNote>
        </div>

        {/* Futur release note */}
        <div className="my-20">
          <h2 id="futur">{t("release.future")} :</h2>
          <ReleaseNote version={"version 0.5.1"}>
            <Version_0_5_1/>
          </ReleaseNote>
          <ReleaseNote version={"version 0.5.2"}>
            <Version_0_5_2/>
          </ReleaseNote>
          <ReleaseNote version={"version 0.6"}>
            <Version_0_6/>
          </ReleaseNote>
          <ReleaseNote version={"version 0.7"}>
            <Version_0_7/>
          </ReleaseNote>
          <ReleaseNote version={"version 0.8"}>
            <Version_0_8/>
          </ReleaseNote>
          <ReleaseNote version={"version 0.9"}>
            <Version_0_9/>
          </ReleaseNote>
        </div>

        {/* Past release note */}
        <div>
        <h2  id='past'>{t("release.old")} :</h2>
        <ReleaseNote version={"version 0.4"}>
            <Version_0_4/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.3.1"}>
            <Version_0_3_1/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.3"}>
            <Version_0_3/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.2.6"}>
          <Version_0_2_6/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.2.5"}>
          <Version_0_2_5/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.2.4"}>
          <Version_0_2_4/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.2.3"}>
          <Version_0_2_3/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.2.2"}>
          <Version_0_2_2/>
          </ReleaseNote>
        <ReleaseNote version={"version 0.2.1"}>
          <Version_0_2_1/>
          </ReleaseNote>
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
