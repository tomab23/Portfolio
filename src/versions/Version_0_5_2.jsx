import React from "react";

const Version_0_5_2 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Add my qualifications.</p>
        </div>
      ) : (
        <div>
          <p>- Ajout de mes diplômes.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_5_2;
