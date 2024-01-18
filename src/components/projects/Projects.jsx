import React, { useEffect, useState } from "react";
// import mock from "../../models/MockProjects.json";
import mockEn from "../../models/MockProjectEn.json";
import mockFr from "../../models/MockProjects.json";
import { useTranslation } from "react-i18next";
import CustomTitle from "../custom/CustomTitle";
import { ProjectsMockFr } from '../../models/ProjectsMockFr';
import { ProjectsMockEn } from "../../models/ProjectsMockEn";
import CardProject from "./CardProject";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="xs:w-[80%] sm:w-[65vw] flex flex-col justify-start items-start gap-5 mt-10"
    >
      {/* <h1 className="uppercase text-slate-700 dark:text-white">{t('navbar.projects')}</h1> */}
      <CustomTitle className={"text-3xl mt-5 mb-10 self-start"}>
        {t("navbar.projects")}
      </CustomTitle>


      <div className="flex flex-wrap gap-10 max-sm:justify-center">
        {localStorage.getItem("i18nextLng") === "en" ? (
          <>
            {ProjectsMockEn.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </>
        ) : (
          <>
            {ProjectsMockFr.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </>
        )}
      </div>


    </div>
  );
};

export default Projects;
