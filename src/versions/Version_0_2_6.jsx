import React from 'react'

const Version_0_2_6 = () => {
    return (
        <div>
    {localStorage.getItem("i18nextLng") === "en" ? (
      <div>
        <p>- Upcoming version updates.</p>
        <p>- Scrollbar update.(not for Firefox)</p>
        <p>- Skill cards update for mobile.</p>
        <p>- Project page updates.</p>
      </div>
    ) : (
      <div>
        <p>- Mise à jour des versions à venir.</p>
        <p>- Mise à jour de la barre de défilement.(pas pour Firefox)</p>
        <p>- Mise à jour des cartes de compétences pour téléphone.</p>
        <p>- Mise à jour des pages de projet.</p>
      </div>
    )}
  </div>
)
}

export default Version_0_2_6
