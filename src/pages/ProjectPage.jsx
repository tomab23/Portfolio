import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mock from "../models/MockProjects.json";
import mockEn from "../models/MockProjectEn.json";
import ButtonBack from "../components/buttons/ButtonBack";
import { ProjectsMockFr } from "../models/ProjectsMockFr";
import { ProjectsMockEn } from "../models/ProjectsMockEn";
import BadgeTech from "../components/projects/BadgeTech";
import ImageSize from "../components/projects/ImageSize";

const ProjectPage = () => {
  // useEffect(() => {
  //     if(localStorage.getItem("darkmode") === "dark") {
  //         document.documentElement.classList.add("dark");
  //     } else {
  //         document.documentElement.classList.remove("dark")
  //     }
  //   }, [])

  const location = useLocation();

  const [project, setProject] = useState({
    id: null,
    name: "",
    resume: "",
  });

  console.log("resume", project.resume);

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

  return (
    <div className="dark:bg-slate-700 min-h-screen px-20 py-5 dark:text-white">
      <ButtonBack />
      <h1 className="text-center">Projet : {project.name}</h1>

      <main className="mt-10">
        <h6>{project.date}</h6>

        <h6 className="my-2">Description : {project.description}</h6>

        <div className="flex gap-1">
          {project.tech?.map((tech) => (
            <BadgeTech key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mt-10">
          {project.imgs?.map((img) => (
            <ImageSize key={img} img={img} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
