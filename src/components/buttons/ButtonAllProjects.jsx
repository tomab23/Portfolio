import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ButtonAllProjects = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();


  return (
    <button onClick={() => navigate("/projects")} className="self-start max-sm:self-center rounded-lg py-1 px-2 dark:bg-dark-dark bg-dark-light cursor-pointer hover:scale-105 text-white mt-2">
      {t("project.button")}
    </button>
  );
};

export default ButtonAllProjects;
