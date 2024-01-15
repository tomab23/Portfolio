import React from 'react'

const Version_0_2_2 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Modified footer, added social network icons </p>
          <p>- Home page, the scroll to top button only appears if you scroll down.</p>
        </div>
      ) : (
        <div>
          <p>- Modification du pied de page, ajout d'icônes de réseaux sociaux </p>
          <p>- Page d'accueil, le bouton haut de page apparaît seulement si on descend vers le bas. </p>
        </div>
      )}
    </div>
  )
}

export default Version_0_2_2
