import React, { useEffect, useState } from "react";
import mock from "../../models/MockProjects.json";
import mockEn from "../../models/MockProjectEn.json";
import CardProject from "./CardProject";
import { useTranslation } from "react-i18next";
import CustomTitle from "../custom/CustomTitle";
import CardDeuxTest from "./CardDeuxTest";

const Projects = () => {
  const { t } = useTranslation();


  return (
    <div
      id="projects"
      className="w-[65vw] flex flex-col justify-start items-start gap-5 mt-10"
    >
      {/* <h1 className="uppercase text-slate-700 dark:text-white">{t('navbar.projects')}</h1> */}
      <CustomTitle className={"text-3xl mt-5 mb-10 self-start"}>
        {t("navbar.projects")}
      </CustomTitle>

      

{/* CARD V1 */}
      <div className="flex flex-wrap gap-10">
        {/* px-10 ? */}
        {localStorage.getItem("i18nextLng") === "en" ? (
          <>
            {mockEn.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </>
        ) : (
          <>
            {mock.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </>
        )}
      </div>
{/* CARD V2 */}
      <div className="flex flex-wrap gap-10">
        {/* px-10 ? */}
      {localStorage.getItem("i18nextLng") === "en" ? (
          <>
            {mockEn.map((project) => (
              <CardDeuxTest key={project.id} project={project} />
            ))}
          </>
        ) : (
          <>
            {mock.map((project) => (
              <CardDeuxTest key={project.id} project={project} />
            ))}
          </>
        )}
      </div>
      
    </div>
  );
};

export default Projects;
