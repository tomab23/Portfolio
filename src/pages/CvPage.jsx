import cv_img from "../assets/images/CV-tb.jpg";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import Footer from "../components/layout/Footer";

const CvPage = () => {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-dark bg-light py-5">
      <div className="flex items-center justify-between px-20 max-sm:px-5">
        <ButtonBack />
        <h1 className="dark:text-white text-slate-600 font-bold">
          {t("pagecv")}
        </h1>
      </div>
      {/* IMG CV */}
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <div className="flex justify-center h-[60vw] max-sm:h-[130vw] max-xl:h-[110vw] mt-5 max-sm:mt-10 ">
          <img
            src={cv_img}
            alt="mon cv"
            className="border border-slate-600 dark:border-none"
            loading="lazy"
          />
        </div>
      </Suspense>

      {/* <div className="flex justify-center mt-10">
        <button className="p-2 border border-dark-light dark:border-white dark:text-white rounded-lg">
          <a href={"#"} download={"#"}>
            {t("download") + " PDF"}
          </a>
        </button>
      </div> */}
      <Footer />
    </div>
  );
};

export default CvPage;
