import React, { Suspense } from 'react'
import { useNavigate } from "react-router-dom";
import BadgeTech from './BadgeTech';
import { useTranslation } from 'react-i18next';

const CardProject = ({ project }) => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const goProject = () => {
      navigate(`/project/${project.name}`, {
        state: {
          id: project.id,
        },
      });
    };

    const info = t("project.info") + " " + project.name;

    return (
        <div
        className="border border-black rounded-lg w-72 hover:rotate-2 shadow-xl"
      >
        <div className='flex justify-center'>
          <Suspense>
          <img src={project.imgs[0]} alt="Image du projet" className="rounded-t-lg h-[10rem]"  />
          </Suspense>
        </div>
        <div className="p-3 flex flex-col justify-center items-start">
          <h1 className='dark:text-gray-50'>{project.name}</h1>
          <p className='dark:text-gray-200 my-1'>{project.incoming ? t("project.incoming") :  project.resume}</p>

          <div className='flex flex-wrap gap-1 my-1'>
            {project.badge.map((tech) => (
              <BadgeTech key={tech} tech={tech} />
            ))}
          </div>

          <button title={info} onClick={goProject} className="self-end rounded-lg py-1 px-2 bg-blue-600 cursor-pointer hover:scale-110 text-white mt-2">
          {t("project.read")}
          </button>
        </div>
      </div>
      );
}

export default CardProject
