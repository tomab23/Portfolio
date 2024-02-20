import React from 'react'

const Version_0_7 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Translating my experiences and projects</p>
        </div>
      ) : (
        <div>
          <p>- Traduction de mes expériences et projets</p>
        </div>
      )}
    </div>
  );
}

export default Version_0_7
