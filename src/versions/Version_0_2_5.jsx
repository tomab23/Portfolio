import React from 'react'

const Version_0_2_5 = () => {
    return (
        <div>
    {localStorage.getItem("i18nextLng") === "en" ? (
      <div>
        <p>- Visual update of the navigation bar on mobile phones.</p>
        <p>- Footer updated to make it more responsive.</p>
        <p>- Versions page updated for smaller screens.</p>
        <p>- Visual update of the home page for smaller screens.</p>
      </div>
    ) : (
      <div>
        <p>- Modification visuelle de la barre de navigation sur téléphone.</p>
        <p>- Modification du pied de page, s'adapte pour les écrans plus petits.</p>
        <p>- Modification de la page des versions pour les écrans plus petits.</p>
        <p>- Modification visuelle de la page d'accueil pour les écrans plus petits.</p>
      </div>
    )}
  </div>
)
}

export default Version_0_2_5
