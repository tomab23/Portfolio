import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CvPage from "./pages/CvPage"
import ScrollPage from "./helpers/ScrollPage"
import ProjectPage from "./pages/ProjectPage"



function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/mon_cv" element={<CvPage />} />
        <Route path="/project/:name" element={<ProjectPage />} /> 
      </Routes>
      <ScrollPage />
    </BrowserRouter>
  )
}

export default App
