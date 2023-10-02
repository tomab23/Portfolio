import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CvPage from "./pages/CvPage"



function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/mon_cv" element={<CvPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
