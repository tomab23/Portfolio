import React from "react";

const Version_0_5 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Function contact.(send function)</p>
        </div>
      ) : (
        <div>
          <p>- Contact fonctionnel.(fonction envoyer)</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_5;
