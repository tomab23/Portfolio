import React from 'react'

const Version_0_6 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Function contact.(send function)</p>
          <p>- Notification after sending the contact form.</p>
          <p>- Fix the "top of page" button that went below the send button for contact on mobile.</p>
        </div>
      ) : (
        <div>
          <p>- Contact fonctionnel.(fonction envoyer)</p>
          <p>- Notification après envoi du formulaire de contact.</p>
          <p>- Correction du bouton "haut de page" qui passait en dessous du bouton envoyer pour le contact sur téléphone.</p>
        </div>
      )}
    </div>
  );
}

export default Version_0_6
