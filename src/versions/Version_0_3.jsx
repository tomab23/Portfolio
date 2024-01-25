import React from "react";

const Version_0_3 = () => {
  return (
    <div>
{localStorage.getItem("i18nextLng") === "en" ? (
  <div>
    <p>- CV update.</p>
    <p>- Added PDF CV download.</p>
    <p>- Click on a project image to enlarge it.(not available on small screens)</p>
  </div>
) : (
  <div>
    <p>- Mise à jour pour le CV.</p>
    <p>- Ajout du téléchargement du CV en format PDF.</p>
    <p>- Possibilité d'agrandir une image d'un projet en cliquant dessus.(non disponible sur les petits écrans)</p>
  </div>
)}
</div> 
)
};

export default Version_0_3;
