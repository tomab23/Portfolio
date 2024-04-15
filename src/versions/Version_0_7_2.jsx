import React from 'react'

const Version_0_7_2 = () => {
    return (
        <div>
          {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
              <p>- Updating the display to change the language.</p>
            </div>
          ) : (
            <div>
              <p>- Mise à jour de l'affichage pour le changement de langue.</p>
            </div>
          )}
        </div>
      );
}

export default Version_0_7_2
