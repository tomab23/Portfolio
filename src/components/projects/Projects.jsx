import React from 'react'
import mock from "../../models/MockProjects.json"
import CardProject from './CardProject'
import { useTranslation } from 'react-i18next';

const Projects = () => {

    const { t } = useTranslation();

  return (
    <div id='projects' className='w-[65vw] flex flex-col justify-start gap-5 mt-10'>
      <h1 className="uppercase text-slate-700 dark:text-white">{t('navbar.projects')}</h1>
      
      <div className='flex flex-wrap gap-10'>
        {mock.map((project) => (
                <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
