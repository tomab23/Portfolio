import React from 'react'
import LinkMyProjects from './LinkMyProjects'

const MeFr = () => {
  return (
    // FR
    <div>
    <p>Je m'appelle <b>Thomas Bartier</b> après avoir découvert le développement en mai 2022 pendant 5 semaines, je suis partie sur une <b>CDA</b> (<i>formation 
      concepteur développeur d'applications</i>) durant 8 mois.</p>
      <br />
      <p>Après <b>obtention du diplôme</b> j'ai intégré un incubateur et une équipe pendant 4 mois où j'ai 
      travaillé sur un projet de covoiturage (CoDrive) en mise en situation professionnelle
      (<LinkMyProjects />).</p>   
      <br />     
      <p>Je suis <b className='dark:text-available-light text-available-dark'>disponible immédiatement</b>.
      
      </p>
    </div>
  )
}

export default MeFr
