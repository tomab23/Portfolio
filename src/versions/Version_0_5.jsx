import React from "react";

const Version_0_5 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Upcoming version updates.</p>
          <p>- Add my projects.(in French)</p>
          <p>- Add my experiences.(in French)</p>
          <p>- Add the tools used for a project.(Project page)</p>
        </div>
      ) : (
        <div>
          <p>- Mise à jour des versions à venir.</p>
          <p>- Ajout de mes projets.(en français)</p>
          <p>- Ajout de mes expériences.(en français)</p>
          <p>- Ajout des outils utilisés dans la page d'un projet.</p>
        </div>
      )}
    </div>
  );
};
 
export default Version_0_5;
