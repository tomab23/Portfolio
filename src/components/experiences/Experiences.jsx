import React from "react";
import CustomTitle from "../custom/CustomTitle";
import { useTranslation } from "react-i18next";
import InfoExp from "./InfoExp";
import MyExperiences from "./MyExperiences";

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div
      id="exp"
      className="xs:w-[80%] sm:w-[65vw] flex flex-col justify-start gap-5 mt-10"
    >
      <CustomTitle classNamee={"text-3xl mt-5 "}>{t("navbar.exp")}</CustomTitle>

      <MyExperiences/>
    </div>
  );
};

export default Experiences;
