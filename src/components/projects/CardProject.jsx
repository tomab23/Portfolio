import React from "react";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png"

const CardProject = ({ project, size}) => {
  const navigate = useNavigate();

  const goProject = () => {
    navigate(`/project/${project.name}`, {
      state: {
        id: project.id,
      },
    });
  };

  return (
    <div
      className={`hover:scale-105 cursor-pointer border border-black rounded-lg w-72`}
      onClick={goProject}
    >
      <div>
        <img src={image} alt="" className="rounded-t-lg" />
      </div>
      <div className="p-3">
        <h1>{project.name}</h1>
        <p>{project.resume}</p>
      </div>
    </div>
  );
};

export default CardProject;
