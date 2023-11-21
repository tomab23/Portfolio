import { useNavigate } from "react-router-dom"

const LinkAbout = () => {

  const navigate = useNavigate();

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/thomas-bartier-185752138/")
  }

  const handleGithub = () => {
    window.open("https://github.com/tomab23")
  }

  return (
    <div className="flex gap-2 text-center">
    <div className="w-24 h-10 rounded-full bg-slate-600 flex justify-center items-center cursor-pointer hover:scale-110"
    onClick={() => navigate("/mon_cv")}>
        <p className="text-white">CV</p>
    </div>
    <div className="w-24 h-10 rounded-full bg-[#0e76a8] flex justify-center items-center cursor-pointer hover:scale-110"
    onClick={handleLinkedin}>
        <p className="text-white ">LinkedIn</p>
    </div>
    <div className="w-24 h-10 rounded-full bg-[#171515] flex justify-center items-center cursor-pointer hover:scale-110"
    onClick={handleGithub}>
        <p className="text-white">Github</p>
    </div>
  </div>
  )
}

export default LinkAbout
