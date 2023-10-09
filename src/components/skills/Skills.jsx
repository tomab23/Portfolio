import { useTranslation } from "react-i18next";
import ListOfSkills from "./ListOfSkills";

const Skills = () => {

    const { t } = useTranslation();

  return (
    <div id="skill" className="w-[65vw] flex flex-col justify-start gap-5">
        <h1 className="uppercase text-slate-700 dark:text-white">{t('navbar.skills')}</h1>
        <ListOfSkills />
    </div>
  );
};

export default Skills;
