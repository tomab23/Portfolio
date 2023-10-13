import React from 'react'
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png"

const CardDeuxTest = ({ project }) => {

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
        className="border border-black rounded-lg w-80"
        onClick={goProject}
      >
        <div>
          <img src={image} alt="" className="rounded-t-lg" />
        </div>
        <div className="p-3 flex flex-col justify-center items-start">
          <h1>{project.name}</h1>
          <p>{project.resume}</p>
          <button className="self-end border border-black rounded-lg p-1 bg-green-600 cursor-pointer hover:scale-110">
            Read me
          </button>
        </div>
      </div>
      );
}

export default CardDeuxTest
