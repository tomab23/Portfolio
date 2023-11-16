import React from 'react'

const Version_0_2_3 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Test version of projects </p>
          <p>- responsive mobile release notes</p>
        </div>
      ) : (
        <div>
          <p>- Version test des projets </p>
          <p>- Notes de versions responsive sur téléphone </p>
        </div>
      )}
    </div>
  )
}

export default Version_0_2_3
