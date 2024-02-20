import React from "react";

const Version_0_9 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Light mode finish.</p>
          <p>- Accessibility and performance.</p>
        </div>
      ) : (
        <div>
          <p>- Finition du mode lumineux.</p>
          <p>- Accessibilité et performance.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_9;
