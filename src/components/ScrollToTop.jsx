import { useTranslation } from "react-i18next";


const ScrollToTop = () => {

  const { t } = useTranslation();

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }
  return (
    <div>
      <button
        className="fixed bottom-6 right-6 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={toTop}
      >
        {t("totop")}
      </button>
    </div>
  )
}

export default ScrollToTop

