import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/illustrations/pageNotFound.svg";

const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="dark:bg-dark bg-light min-h-screen flex flex-col  justify-center items-center
    max-lg:justify-start max-lg:pt-32 dark:text-white ">
      <h1>Oups ! {t("error.404")}</h1>
      <img src={notFound} alt="Image 404" width={700} className="max-md:-my-8 -my-16" />
      <button onClick={handleClick} className="border border-black dark:border-white hover:scale-110 rounded-lg p-2 ">{t("error.button")}</button>
    </div>
  );
};

export default ErrorPage;
