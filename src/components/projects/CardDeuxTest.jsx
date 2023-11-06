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
        className="border border-black rounded-lg w-72"
        onClick={goProject}
      >
        <div>
          <img src={image} alt="" className="rounded-t-lg" />
        </div>
        <div className="p-3 flex flex-col justify-center items-start">
          <h1 className='text-gray-50'>{project.name}</h1>
          <p className='text-gray-200'>{project.resume}</p>

          <div className='flex gap-3'>
            {project.tech.map((tech) => (
              <p key={tech}>{tech}</p>
            ))}
          </div>
          <button className="self-end rounded-lg py-1 px-2 bg-blue-600 cursor-pointer hover:scale-110 text-white mt-2">
            Read more
          </button>
        </div>
      </div>
      );
}

export default CardDeuxTest
