import React from "react";

const Version_0_1 = () => {
  return (
    <div>
      {localStorage.getItem("i18nextLng") === "en" ? (
        <div>
          <p>- Dark mode functional.</p>
          <p>- Light mode functional but not completed.(not recommended)</p>
          <p>- Couleur non définitif.</p>
          <p>- Partial translation for the moment.</p>
          <p>- CV only in French.</p>
          <p>- Functional links.</p>
          <p>- Functional navigation.</p>
          <p>- Scroll to top button functional but not completed.</p>
          <p>- Not yet fully responsive.</p>
          <p>- Experiences not yet implemented.</p>
          <p>- Contact form not yet set up.</p>
          <p>
            - Test of the "send" button for the contact form.(several versions)
          </p>
          <p>- Typography on test </p>
          <p>- Title in test</p>
          <p>- Several versions of cards for projects.(under development)</p>
          <p>- Project page under development.</p>
        </div>
      ) : (
        <div>
          <p>- Mode sombre fonctionnel.</p>
          <p>
            - Le mode lumineux fonctionne mais n'est pas terminé.(non
            recommandé)
          </p>
          <p>- Couleur non-définitive.</p>
          <p>- Traduction partielle pour l'instant.</p>
          <p>- CV qu'en français.</p>
          <p>- Liens fonctionnelles.</p>
          <p>- Navigation fonctionnelle.</p>
          <p>- Bouton Haut de page fonctionnel mais pas terminé.</p>
          <p>- Pas encore totalement responsive.</p>
          <p>- Partie expériences pas encore mise en place.</p>
          <p>- Formulaire de contact pas encore mis en place.</p>
          <p>
            - Test de bouton "envoyer" pour le formulaire de contact.(plusieurs
            versions)
          </p>
          <p>- Typographie en test. </p>
          <p>- Titre en test.</p>
          <p>
            - Plusieurs version de cartes pour les projets.(en développement)
          </p>
          <p>- Page de projet en développement.</p>
        </div>
      )}
    </div>
  );
};

export default Version_0_1;
