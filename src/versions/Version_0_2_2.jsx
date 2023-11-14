import React from 'react'

const Version_0_2_2 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Modified footer, added social network icons </p>
          <p>- Home page, the scroll to top button only appears if you scroll down.</p>
          <p>- Navbar that remains when you scroll down the home page.</p>
        </div>
      ) : (
        <div>
          <p>- Modification du bas de page, ajout d'icônes de réseaux sociaux </p>
          <p>- Page d'accueil, le bouton haut de page apparaît seulement si on descend vers le bas. </p>
          <p>- Barre de navigation qui reste quand on descend la page d'accueil. </p>
        </div>
      )}
    </div>
  )
}

export default Version_0_2_2
