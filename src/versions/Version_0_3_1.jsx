import React from 'react'

const Version_0_3_1 = () => {
    return (
        <div>
    {localStorage.getItem("i18nextLng") === "en" ? (
      <div>
        <p>- Spelling corrections.</p>
        <p>- Change the color of technology badges.(Light mode)</p>
        <p>- Indication added when the mouse is over the "Read more" button on the project cards.</p>
        <p>- Navigation bar update.</p>
        <p>- Upcoming version updates.</p>
      </div>
    ) : (
      <div>
        <p>- Corrections de l'orthographe.</p>
        <p>- Modification couleur des badges de technologies.(Light mode)</p>
        <p>- Indication ajoutée quand la souris est sur le bouton "voir plus" des cartes projets.</p>
        <p>- Retouche de la barre de navigation.</p>
        <p>- Mise à jour des versions à venir.</p>
      </div>
    )}
    </div> 
    ) 
     
}

export default Version_0_3_1