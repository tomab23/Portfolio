import React from "react";

const Version_0_5_1 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Visual retouching on project cards.</p>
        </div>
      ) : (
        <div>
          <p>- Retouches visuelles sur les cartes de projet.</p>
        </div>
      )}
    </div>
  );
}; 

export default Version_0_5_1;
