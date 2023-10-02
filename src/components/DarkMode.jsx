import { Moon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkMode = () => {

  const [theme, setTheme] = useState(localStorage.getItem("darkmode") ? localStorage.getItem("darkmode") : "dark" );

  const themeSwitch = () => {
    // setTheme(theme === "dark" ? "light" : "dark");
    if(theme === "dark") {
      setTheme("light")
      localStorage.setItem("darkmode", "light")
    } else {
      setTheme("dark")
      localStorage.setItem("darkmode", "dark")
    }

  }

  // useEffect(() => {
  //   if(window.matchMedia("(prefers-color-scheme: dark").matches) {
  //       setTheme("dark");
  //   } else {
  //       setTheme("dark");
  //   }
  // }, [])

  useEffect(() => {
    if(theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkmode", "dark")
        
    } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("darkmode", "light")
    }
  }, [theme])

  return (
    <div>
      {theme === "dark" && <SunMoon onClick={themeSwitch}  color="white" className="cursor-pointer" />}
      {theme === "light" && <Moon onClick={themeSwitch}  color="white" className="cursor-pointer"  />}
    </div>
  );
};

export default DarkMode;
