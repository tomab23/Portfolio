import React from 'react'
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';

const CardProject = ({ project }) => {

  const navigate = useNavigate();

  const goProject = () => {
    navigate(`/project/${project.name}`, {state: {
      id: project.id
    }})
  }

  return (
    <div className='hover:scale-110' onClick={goProject}>
      <h1>{project.name}</h1>
      <p>id: {project.id}</p>
    </div>
  )
}

export default CardProject
