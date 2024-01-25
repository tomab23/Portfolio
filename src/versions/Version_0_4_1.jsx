import React from "react";

const Version_0_4_1 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Add this portfolio to the application..</p>
        </div>
      ) : (
        <div>
          <p>- Ajout de ce portfolio sur l'application.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_4_1;
