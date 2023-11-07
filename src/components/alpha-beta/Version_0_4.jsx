import React from "react";

const Version_0_4 = () => {

  
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
            <p>- Full translation (application + CV)</p>
            <p>- Responsive</p>
            <p>- Light mode finish</p>
    </div>
      ) : (
        <div>
        <p>- Traduction totale (application + CV)</p>
        <p>- Responsive</p>
        <p>- Finition du mode lumineux</p>
</div>
      )}
    </div>
  );
};

export default Version_0_4;