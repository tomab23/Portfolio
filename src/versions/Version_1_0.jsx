import React from 'react'

const Version_1_0 = () => {
    return (
        <div>
          {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
              <p>- Accessibility and performance.</p>
            </div>
          ) : (
            <div>
              <p>- Accessibilité et performance.</p>
            </div>
          )}
        </div>
      );
}

export default Version_1_0