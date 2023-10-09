import React from 'react'
import Projects from './Projects';

const CardProject = ({ project }) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>id: {project.id}</p>
    </div>
  )
}

export default CardProject
