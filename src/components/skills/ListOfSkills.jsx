import React from 'react'
import CardSkill from './CardSkill'
import reactIcon from "../../assets/images/stack/react.png"
import reactNative from "../../assets/images/stack/reactNative.png"
import js from "../../assets/images/stack/js.png"
import ts from "../../assets/images/stack/typescript.png"
import java from "../../assets/images/stack/java.png"
import spring from "../../assets/images/stack/spring.png"
import mysql from "../../assets/images/stack/mysql-logo.svg"
import i18n from "../../assets/images/stack/i18n.png"
import tailwind from "../../assets/images/stack/taiwind.png"
import scrum from "../../assets/images/stack/scrum.png"
import formik from "../../assets/images/stack/formik.png"

const ListOfSkills = () => {
  return (
    <div className="flex flex-wrap justify-start gap-5"> 
    {/* px-10 ?? */}
    <CardSkill name={"React"} title={"React"} color={"text-[#61dbfb]"}>
        <img src={reactIcon} alt="React logo" />
    </CardSkill>
    <CardSkill title={"React native"}>
        <img src={reactNative} alt="React native logo" className="w-[93%]" />
    </CardSkill>
    <CardSkill name={"JavaScript"} title={"JavaScript"} color={"dark:text-[#f5dd1e] text-black"}>
        <img src={js} alt="JavaScript logo" />
    </CardSkill>
    <CardSkill name={"TypeScript"} title={"TypeScript"} color={"text-[#0288d1]"}>
        <img src={ts} alt="TypeScript logo" />
    </CardSkill>
    <CardSkill name={"Java"} title={"Java"} color={"text-[#ff0000]"}>
        <img src={java} alt="Java logo"  />
    </CardSkill>
    <CardSkill name={"Spring boot"} title={"Spring boot"} color={"text-[#68be43]"} >
        <img src={spring} alt="Spring boot logo" />
    </CardSkill>
    <CardSkill title={"MySql"}>
        <img src={mysql} alt="MySql logo"  />
    </CardSkill>
    <CardSkill name={"i18next"} title={"i18next"} color={"text-[#009688]"}>
        <img src={i18n} alt="i18next logo" 
        // onClick={() => window.open("https://www.i18next.com/")}
        />
    </CardSkill>
    <CardSkill name={"Tailwind"} title={"Tailwind"} color={"text-[#35bef8]"}>
        <img src={tailwind} alt="Tailwind logo"  />
    </CardSkill>
    <CardSkill title={"Formik"}>
        <img src={formik} alt="Formik logo"  />
    </CardSkill>
    <CardSkill title={"Approche agile Scrum"} color={"text-white"}>
        <img src={scrum} alt="Scrum image"  />
    </CardSkill>
  </div>
  )
}

export default ListOfSkills
