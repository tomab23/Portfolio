import { useTranslation } from "react-i18next";
import ListOfSkills from "./ListOfSkills";
import CustomTitle from "../custom/CustomTitle";

const Skills = () => {

    const { t } = useTranslation();

  return (
    <div id="skills" className="w-[65vw] flex flex-col justify-start gap-5 mt-10">
        {/* <h1 className="uppercase text-slate-700 dark:text-white">{t('navbar.skills')}</h1> */}
        <CustomTitle className={"text-3xl mt-5 mb-10"}>{t('navbar.skills')}</CustomTitle>
        <ListOfSkills />
    </div>
  );
};

export default Skills;
