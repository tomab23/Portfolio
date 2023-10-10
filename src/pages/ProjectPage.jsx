import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import mock from "../model/MockProjects.json"
import mockEn from "../model/MockProjectEn.json"
import ButtonBack from '../components/buttons/ButtonBack';

const ProjectPage = () => {

    useEffect(() => {
        if(localStorage.getItem("darkmode") === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
      }, [])

    const location = useLocation();

    const [project, setProject] = useState({
        id: null,
        name: "",
        resume: ""
    });


    useEffect(() => {
        if(localStorage.getItem("i18nextLng") === "fr-FR") {
            const proj = mock.find((project) => project.id === location.state.id);
            setProject(proj)
          } else if (localStorage.getItem("i18nextLng") === "fr") {
            const proj = mock.find((project) => project.id === location.state.id);
            setProject(proj)
          } else {
            const proj = mockEn.find((project) => project.id === location.state.id);
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
