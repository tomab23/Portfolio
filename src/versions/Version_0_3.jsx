import React from "react";

const Version_0_3 = () => {
  return (
    <div>
{localStorage.getItem("i18nextLng") === "en" ? (
  <div>
    <p>- CV update.</p>
    <p>- Added PDF CV download.</p>
    <p>- Click on a project image to enlarge it.(not possible on small  screen)</p>
  </div>
) : (
  <div>
    <p>- Mise à jour pour le CV.</p>
    <p>- Ajout du téléchargement du CV en format PDF</p>
    <p>- Possibilité d'agrandir une image d'un projet en cliquant dessus.(pas possible sur petit écran)</p>
  </div>
)}
</div> 
)
};

export default Version_0_3;
