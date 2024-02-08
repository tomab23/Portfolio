import React from "react";

const Version_0_5_1 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Add a 404 page.</p>
          <p>- Fixing routes causing problems with netlify.</p>
        </div>
      ) : (
        <div>
          <p>- Ajout d'une page 404.</p>
          <p>- Correction des routes causant un probleme avec netlify.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_5_1;
