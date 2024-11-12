import React from 'react'

const Version_0_7_4 = () => {
    return (
        <div>
          {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
              <p>- Fixed an issue with loading the correct theme in mobile version.</p>
              <p>- Updating the color of application themes.</p>
            </div>
          ) : (
            <div>
              <p>- Correction d'un probleme avec le chargement du bon thème en version mobile.</p>
              <p>- Modification de couleur des thèmes de l'application.</p>
            </div>
          )}
        </div>
      );
}
 
export default Version_0_7_4
