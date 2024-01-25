import React from "react";

const Version_0_5 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- My experiences updated in French only for the moment.</p>
        </div>
      ) : (
        <div>
          
          <p>- Mes expériences mises à jour en français.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_5;
