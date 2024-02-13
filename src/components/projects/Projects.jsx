import React, { useEffect, useState } from "react";
// import mock from "../../models/MockProjects.json";
import mockEn from "../../models/MockProjectEn.json";
import mockFr from "../../models/MockProjects.json";
import { useTranslation } from "react-i18next";
import CustomTitle from "../custom/CustomTitle";
import { ProjectsMockFr } from '../../models/ProjectsMockFr';
import { ProjectsMockEn } from "../../models/ProjectsMockEn";
import CardProject from "./CardProject";
import ButtonAllProjects from "../buttons/ButtonAllProjects";

const Projects = () => {
  const { t } = useTranslation();

  const mock = localStorage.getItem("i18nextLng") === "en" ? ProjectsMockEn : ProjectsMockFr;

  return (
    <div
      id="projects"
      className="xs:w-[80%] sm:w-[65vw] flex flex-col justify-start items-start gap-5 mt-10"
    >
      <CustomTitle className={"text-3xl mt-5 mb-10 self-start"}>
        {t("project.home")}
      </CustomTitle>


      <div className="flex flex-wrap gap-10 max-sm:justify-center">
            {mock.map((project) => (
              <CardProject key={project.id} project={project} />
            )).slice(-3).reverse()}
      </div>

      {ProjectsMockFr.length > 3 && 
      <ButtonAllProjects />
      }
    </div>
  );
};

export default Projects;
