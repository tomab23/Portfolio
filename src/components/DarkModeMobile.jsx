import React, { useEffect, useState } from 'react'
import { Moon, SunMoon } from "lucide-react";

const DarkModeMobile = () => {

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
    <div className='flex justify-end items-center pr-5 gap-2 py-4'>
    <SunMoon onClick={themeSwitch}  color={theme === "dark" ? "gray" : "black"} className="cursor-pointer" />
    <p className='font-bold'>|</p>
    <Moon onClick={themeSwitch}  color={theme === "light" ? "gray" : "black"} className="cursor-pointer"  />
  </div>
  )
}

export default DarkModeMobile
