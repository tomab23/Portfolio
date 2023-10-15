import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CvPage from "./pages/CvPage"
import ScrollPage from "./helpers/ScrollPage"
import ProjectPage from "./pages/ProjectPage"
import Versions from "./pages/Versions"
import { useEffect } from "react"



function App() {

  useEffect(() => {
    if(localStorage.getItem("darkmode") === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/mon_cv" element={<CvPage />} />
        <Route path="/project/:name" element={<ProjectPage />} /> 
        <Route path="/versions" element={<Versions />} /> 
      </Routes>
      <ScrollPage />
    </BrowserRouter>
  )
}

export default App
