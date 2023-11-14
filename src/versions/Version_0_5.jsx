import React from "react";

const Version_0_5 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Responsive</p>
        </div>
      ) : (
        <div>
          <p>- Responsive</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_5;
