import React from "react";

const Version_0_3 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Function contact (send function)</p>
          <p>- My experiences updated in French only for the moment</p>
          <p>- My projects (maps + page with information) updated in French</p>
        </div>
      ) : (
        <div>
          <p>- Contact fonctionnel (fonction envoyer)</p>
          <p>- Mes expériences mises à jour en français</p>
          <p>
            - Mes projets (cartes + page avec informations) mis à jour en
            français
          </p>
        </div>
      )}
    </div>
  );
};

export default Version_0_3;
