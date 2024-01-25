import React from 'react'

const Version_0_6 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Function contact.(send function)</p>
          <p>- Notification after sending the contact form.</p>
        </div>
      ) : (
        <div>
          <p>- Contact fonctionnel.(fonction envoyer)</p>
          <p>- Notification après envoi du formulaire de contact.</p>
        </div>
      )}
    </div>
  );
}

export default Version_0_6
