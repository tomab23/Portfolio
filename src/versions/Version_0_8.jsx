import React from "react";

const Version_0_8 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- New system for opening an image of a project.</p>
        </div>
      ) : (
        <div>
          <p>- Nouveau systeme pour ouvrir l'image d'un projet.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_8;
