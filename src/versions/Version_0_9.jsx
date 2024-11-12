import React from "react";

const Version_0_9 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Light theme finish.</p>
          <p>- Responsive application on all screen sizes.</p>
        </div>
      ) : (
        <div>
          <p>- Finition du Thème lumineux.</p>
          <p>- Application adaptée à toutes les tailles d'écrans.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_9;
