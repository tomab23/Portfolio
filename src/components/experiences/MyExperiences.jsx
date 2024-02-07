import React from 'react'
import InfoExp from './InfoExp'

const MyExperiences = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10">
    {/* EXP 1 */}
    <li>
      <InfoExp
        latest="true"
        title={"Incubateur numérique | 1formation=1job"}
        date={"Avril à Août 2023"}
      >
        <p>
          Mise en situation professionnelle, travail sur une application de
          covoiturage.
        </p>
        <p className="italic">
          Technologies utilisées : Java JEE, Spring boot 3, React.js,
          Tailwind, MariaDb, Email.js, Stripe, Formik, Yup
        </p>
        <p className="text-sm">
          Développement fullstack sur la gestion des trajets, sur les
          réservations, sur la gestions des crédits et sur le formulaire de
          contact.
        </p>
      </InfoExp>
    </li>
    {/* EXP 1 */}
    <li>
      <InfoExp
        title={"Stage | Id formation"}
        date={"9 Janvier 2023 au 3 Février 2023"}
      >
        <p>
          Développement d’une application de gestion d'entreprise sécurisée.
        </p>
        <p className="italic">
          echnologies utilisées : Java JEE, Spring boot, React.js,
          Typescript, MySql, i18next
        </p>
        <p className="text-sm">
          Travail sur la sécurité de l'application, connexion utilisateur,
          création, modification, suppression et affichages des mouvements
          financiers. Mise en place de la traduction (français - anglais)
        </p>
      </InfoExp>
    </li>
    <li>
      <InfoExp
        title={"CDA  | Id Formation"}
        date={"Juin 2022 à Février 2023"}
      >
        <p>
        Titre Professionnel Concepteur Développeur d'Applications (bac+3/+4).
        </p>
      </InfoExp>
    </li>
    <li>
      <InfoExp
        title={"Nurserie numérique | AFPA"}
        date={"Mai à juin 2022"}
      >
        <p>
        Introduction HTML 5, CSS 3, JavaScript, base de données
        </p>
      </InfoExp>
    </li>
  </ol>
  )
}

export default MyExperiences
