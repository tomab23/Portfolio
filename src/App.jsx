import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CvPage from "./pages/CvPage"
import ScrollPage from "./helpers/ScrollPage"



function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/mon_cv" element={<CvPage />} /> 
      </Routes>
      <ScrollPage />
    </BrowserRouter>
  )
}

export default App
