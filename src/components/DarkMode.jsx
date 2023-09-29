import { Moon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: darl").matches) {
        setTheme("dark");
    } else {
        setTheme("dark");
    }
  }, [])

  useEffect(() => {
    if(theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark")
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
