import React from 'react'
import ButtonBack from '../components/buttons/ButtonBack'
import { useTranslation } from 'react-i18next';
import { ProjectsMockEn } from '../models/ProjectsMockEn';
import CardProject from '../components/projects/CardProject';
import { ProjectsMockFr } from '../models/ProjectsMockFr';
import ScrollToTop from '../components/buttons/ScrollToTop';

const AllProjectsPage = () => {

  const { t } = useTranslation();

  const mock = localStorage.getItem("i18nextLng") === "en" ? ProjectsMockEn: ProjectsMockFr;


  return (
    <div className='dark:bg-dark bg-light py-5 min-h-screen'>
        <div className='flex xs:gap-2 sm:gap-5 items-center px-5 lg:px-10 xl:px-20 dark:text-white text-dark font-bold'>
            <ButtonBack />
            <h1 className=''>{t("project.title")}</h1>
            <h3 className='xl:text-xl'>({mock.length})</h3>
        </div>
        
        <div className="flex flex-wrap gap-10 justify-center py-10">
            {mock.map((project) => (
              <CardProject key={project.id} project={project} />
            )).reverse()}
      </div>
      <ScrollToTop/>
    </div>
  )
}

export default AllProjectsPage
