import React from "react";

const Version_0_8 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Responsive application on all screen sizes.</p>
        </div>
      ) : (
        <div>
          <p>- Application adaptée à toutes les tailles d'écrans.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_8;
