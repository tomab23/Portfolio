import React from 'react'

const Version_0_2_5 = () => {
    return (
        <div>
    {localStorage.getItem("i18nextLng") === "en" ? (
      <div>
        <p>- Modification of the navigation bar on mobile phones visualy</p>
      </div>
    ) : (
      <div>
        <p>- Modification visuelle de la barre de navigation sur téléphone</p>
      </div>
    )}
  </div>
)
}

export default Version_0_2_5
