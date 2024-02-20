import React from 'react'
import InfoExp from './InfoExp'
import { useTranslation } from 'react-i18next';

const MyExperiences = () => {

  const { t } = useTranslation();
  // {t("navbar.exp")}
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10">
    {/* EXP incubateur */}
    <li>
      <InfoExp
        latest="true"
        title={`${t("experience.incubateur.name")} | 1formation=1job`}
        date={t("experience.incubateur.date")}
      >
        <p>
        {t("experience.incubateur.resume")}
        </p>
        <p className="italic">
        {t("experience.tech")} : Java JEE, Spring boot 3, React.js,
          Tailwind, MariaDb, Email.js, Stripe, Formik, Yup
        </p>
        <p className="text-sm">
        {t("experience.incubateur.job")}
        </p>
      </InfoExp>
    </li>
    {/* EXP stage cda */}
    <li>
      <InfoExp
        title={`${t("experience.stageCda.name")} | Id formation`}
        date={"9 Janvier 2023 au 3 Février 2023"}
      >
        <p>
        {t("experience.stageCda.resume")}
        </p>
        <p className="italic">
        {t("experience.tech")} : Java JEE, Spring boot, React.js,
          Typescript, MySql, i18next
        </p>
        <p className="text-sm">
        {t("experience.stageCda.job")}
        </p>
      </InfoExp>
    </li>
    <li>
      <InfoExp
        title={"CDA  | Id Formation"}
        date={t("experience.cda.date")}
      >
        <p>
        {t("experience.cda.resume")} (bac+3/+4)
        </p>
      </InfoExp>
    </li>
    <li>
      <InfoExp
        title={`${t("experience.nurserie.name")} | AFPA`}
        date={t("experience.nurserie.date")}
      >
        <p>
        {t("experience.nurserie.resume")}
        </p>
      </InfoExp>
    </li>
  </ol>
  )
}

export default MyExperiences
