import React from 'react'

const Version_0_2_4 = () => {
  return (
          <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Change the navigation bar on mobile phones. </p>
        </div>
      ) : (
        <div>
          <p>- Modification de la barre de navigation sur téléphone. </p>
        </div>
      )}
    </div>
  )
}

export default Version_0_2_4


