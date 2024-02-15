import React from "react";

const Version_0_5_2 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Change the text size for displaying the version on mobile.</p>
          <p>- Visual changes to the mobile navigation menu.</p>
        </div>
      ) : (
        <div>
          <p>- Modification de la taille du texte pour l'affichage de la version sur téléphone.</p>
          <p>- Modification visuelle du menu de navigation sur téléphone.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_5_2;
