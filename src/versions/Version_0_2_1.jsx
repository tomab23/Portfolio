import React from "react";

const Version_0_2_1 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Modification of the language selection menu </p>
          <p>- Spelling correction</p>
        </div>
      ) : (
        <div>
          <p>- Modification du menu de choix de langues </p>
          <p>- Correction de l'orthographe</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_2_1;
