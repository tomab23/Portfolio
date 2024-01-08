import React from 'react'

const Version_0_2_4 = () => {
  return (
          <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Change the navigation bar on mobile phones (beta) </p>
        </div>
      ) : (
        <div>
          <p>- Modification de la barre de navigation sur téléphone (beta) </p>
        </div>
      )}
    </div>
  )
}

export default Version_0_2_4


