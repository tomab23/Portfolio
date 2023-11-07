import React from 'react'
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png"
import BadgeTech from './BadgeTech';
import { useTranslation } from 'react-i18next';

const CardDeuxTest = ({ project }) => {

    const navigate = useNavigate();
    const { t } = useTranslation();

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
      >
        <div>
          <img src={image} alt="" className="rounded-t-lg" />
        </div>
        <div className="p-3 flex flex-col justify-center items-start">
          <h1 className='dark:text-gray-50'>{project.name}</h1>
          <p className='dark:text-gray-200'>{project.resume}</p>

          <div className='flex gap-1 mt-1'>
            {project.tech.map((tech) => (
              <BadgeTech key={tech} tech={tech} />
            ))}
          </div>

          <div>
            <BadgeTech />
          </div>
          <button onClick={goProject} className="self-end rounded-lg py-1 px-2 bg-blue-600 cursor-pointer hover:scale-110 text-white mt-2">
          {t("project.read")}
          </button>
        </div>
      </div>
      );
}

export default CardDeuxTest
