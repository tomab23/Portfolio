

const ScrollToTop = () => {

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
        Scroll to Top
      </button>
    </div>
  )
}

export default ScrollToTop

