import React from 'react'

const Version_0_7_3 = () => {
    return (
        <div>
          {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
              <p>- Updating flags for language change.</p>
              <p>- Fix language dropdown position.</p>
            </div>
          ) : (
            <div>
              <p>- Mise à jour des drapeaux pour le changement de langue.</p>
              <p>- Correction de la position pour le menu du choix de langue.</p>
            </div>
          )}
        </div>
      );
}

export default Version_0_7_3

