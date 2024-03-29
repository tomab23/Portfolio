import React from "react";
import { Dot } from "lucide-react";

const Version_0_4 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Project management changes : </p>
          <p className="flex">
            <Dot /> 
            Add a button to view all projects.(if there are more than 3 projects)
          </p>
          <p className="flex">
            <Dot />
            Add a page to view all projects.
          </p>
          <p>- Navigation bar update.</p>
        </div>
      ) : (
        <div>
          <p>- Modification de la gestion des projets : </p>
          <p className="flex">
            <Dot /> 
            Ajout d'un bouton pour voir tous les projets.(si il y a plus de 3 projets)
          </p>
          <p className="flex">
            <Dot />
            Ajout d'une page pour afficher tous les projets.
          </p>
          <p>- Retouche de la barre de navigation.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_4;
