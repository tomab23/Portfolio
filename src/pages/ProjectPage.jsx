import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import mock from "../models/MockProjects.json"
import mockEn from "../models/MockProjectEn.json"
import ButtonBack from '../components/buttons/ButtonBack';
import { ProjectsMock } from '../models/ProjectsMock';
import { ProjectsMockEn } from '../models/ProjectsMockEn';

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
        resume: ""
    });


    console.log("resume", project.resume);


    useEffect(() => {
        if(localStorage.getItem("i18nextLng") === "en") {
          const proj = ProjectsMockEn.find((project) => project.id === location.state.id);
          setProject(proj)
          } else {
            const proj = ProjectsMock.find((project) => project.id === location.state.id);
            setProject(proj)
          }
    }, [])




  return (
    <div className='dark:bg-slate-700 min-h-screen px-20 py-5 dark:text-white'>
        <ButtonBack/>
        <h1 className='text-center'>Projet : {project.name}</h1>

        <h6>Resume : {project.resume}</h6>
      
    </div>
  )
}

export default ProjectPage
