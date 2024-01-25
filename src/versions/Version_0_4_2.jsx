import React from "react";

const Version_0_4_2 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>
            - My projects (cards + page with information) updated in French.
          </p>
        </div>
      ) : (
        <div>
          <p>
            - Mes projets (cartes + page avec informations) mis à jour en
            français.
          </p>
        </div>
      )}
    </div>
  );
};

export default Version_0_4_2;
