import React from 'react'

const Version_0_7_1 = () => {
    return (
        <div>
          {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
              <p>- Update CV french and english</p>
            </div>
          ) : (
            <div>
              <p>- Mise à jour du CV français et anglais</p>
            </div>
          )}
        </div>
      );
}

export default Version_0_7_1
