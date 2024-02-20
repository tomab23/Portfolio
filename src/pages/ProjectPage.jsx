import React, { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mock from "../models/MockProjects.json";
import mockEn from "../models/MockProjectEn.json";
import ButtonBack from "../components/buttons/ButtonBack";
import { ProjectsMockFr } from "../models/ProjectsMockFr";
import { ProjectsMockEn } from "../models/ProjectsMockEn";
import BadgeTech from "../components/projects/BadgeTech";
import ImageSize from "../components/projects/ImageSize";
import LinksProject from "../components/projects/LinksProject";
import ScrollToTop from "../components/buttons/ScrollToTop";
import { X } from "lucide-react";
import OpenImage from "../components/projects/OpenImage";
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // const theme = localStorage.getItem("darkmode");

  const [project, setProject] = useState({
    id: null,
    name: "",
    resume: "",
    badge: [],
    tech: [],
    outil:[],
    description: "",
    more: "",
    date: "",
    github: "",
    site: "",
    imgs: [],
  });

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") === "en") {
      const proj = ProjectsMockEn.find(
        (project) => project.id === location.state.id
      );
      setProject(proj);
    } else {
      const proj = ProjectsMockFr.find(
        (project) => project.id === location.state.id
      );
      setProject(proj);
    }
  }, []);

  const siteExist = project.site === "" ? false : true;
  const moreDescription = project.more === "" ? false : true;

  const [open, setOpen] = useState(false);
  const [imgOpen, setImgOpen] = useState();

  const handleOpenImage = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="dark:bg-dark bg-light min-h-screen px-5 lg:px-10 xl:px-20 pt-5 pb-20 dark:text-white">
      {/* Img open */}
      {open && window.innerWidth > 1200 && (
        <OpenImage handleOpenImage={handleOpenImage} imgOpen={imgOpen} />
      )}
      <div>
        <ButtonBack />
        <h1 className="text-center uppercase max-sm:mr-5">{project.name}</h1>
      </div>
      <main className="mt-10">
        <h6>{project.date}</h6>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech?.map((tech) => (
            <BadgeTech key={tech} tech={tech} />
          ))}
        </div>

        <h6 className="mt-5 max-sm:w-[90vw] w-[70vw]">{project.description}</h6>

        {moreDescription &&
        <h6 className="mt-5 max-sm:w-[90vw] w-[70vw]">{project.more}</h6>
        }

        {project.outil.length > 0 &&
        <div className="mt-5">
          <h6>{t("project.tools")} : </h6>
          {project.outil?.map((outil) => (
            <p before="• " className="before:content-[attr(before)]">{outil}</p>
          ))}
        </div>
        }

        <Suspense>
          <LinksProject
            github={project.github}
            site={siteExist}
            siteUrl={project.site}
          />
        </Suspense>

        <div className="flex flex-wrap max-lg:gap-3 gap-10 mt-10">
          {project.imgs?.map((img) => (
            <ImageSize
              key={img}
              img={img}
              open={handleOpenImage}
              setImgOpen={setImgOpen}
            />
          ))}
        </div>

        <ScrollToTop />
      </main>
    </div>
  );
};

export default ProjectPage;
