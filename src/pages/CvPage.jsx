import cv_img from "../assets/images/CV.jpg";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import ButtonBack from "../components/buttons/ButtonBack";
import Footer from "../components/layout/Footer";
import ButtonDownload from "../components/buttons/ButtonDownload";
import ScrollToTop from "../components/buttons/ScrollToTop";

const CvPage = () => {
  const { t } = useTranslation();

  return (
    <div className="dark:bg-dark bg-light py-5">
      <div className="flex items-center justify-between px-5 lg:px-10 xl:px-20">
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

      <ButtonDownload/>

      <ScrollToTop/>


      <Footer />
    </div>
  );
};

export default CvPage;
