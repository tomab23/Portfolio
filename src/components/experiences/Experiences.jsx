import React from "react";
import CustomTitle from "../custom/CustomTitle";
import { useTranslation } from "react-i18next";
import InfoExp from "./InfoExp";

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div id="exp" className="w-[65vw] flex flex-col justify-start gap-5 mt-10">
      <CustomTitle classNamee={"text-3xl mt-5 "}>{t("navbar.exp")}</CustomTitle>

      <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10">
        {/* EXP 1 */}
        <InfoExp
          latest="true"
          title={"Flowbite Application UI v2.0.0"}
          date={"Released on January 13th, 2022"}
        >
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </InfoExp>
        {/* EXP 1 */}
        <InfoExp
          title={"Flowbite Figma v1.3.0"}
          date={"Released on December 7th, 2021"}
        >
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </InfoExp>
      </ol>
    </div>
  );
};

export default Experiences;
