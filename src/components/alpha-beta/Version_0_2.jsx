import React from "react";

const Version_0_2 = () => {

 
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
            <div>
            <p>- Addition of the experiments section (without any real information)</p>
            <p>- Added contact form, added my e-mail address and translation, send button not functional </p>
            <p>- Modification of project cards, addition of badges with technologies</p>
            <p>- Translation of release notes</p>
            <p>- Update the light mode</p>
        </div>
      ) : (
        <div>
        <p>- Ajout de la partie expériences (sans informations réelles)</p>
        <p>- Ajout formulaire de contact, ajout de mon adresse mail et de la traduction, bouton envoyer non-fonctionnelle </p>
        <p>- Modification des cartes de projet, ajout de badges avec les technologies</p>
        <p>- Traduction des notes de version</p>
        <p>- Modification du mode lumineux</p>
    </div>
      )}
    </div>
  );
};

export default Version_0_2;