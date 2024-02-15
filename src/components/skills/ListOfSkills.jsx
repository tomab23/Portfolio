import React, { Suspense } from 'react'
import CardSkill from './CardSkill'
import reactIcon from "../../assets/images/stack/react.png"
import reactNative from "../../assets/images/stack/reactNative.png"
import js from "../../assets/images/stack/js.png"
import ts from "../../assets/images/stack/typescript.png"
import java from "../../assets/images/stack/java.png"
import spring from "../../assets/images/stack/spring.png"
import i18n from "../../assets/images/stack/i18n.png"
import tailwind from "../../assets/images/stack/taiwind.png"
import scrum from "../../assets/images/stack/scrum.png"
import formik from "../../assets/images/stack/formik.png"
import mysql from "../../assets/images/stack/mysql-logo.svg"

const ListOfSkills = () => {
  return (
    <div className="flex flex-wrap xs:justify-center sm:justify-start xs:gap-3 sm:gap-4 lg:gap-5"> 
    {/* px-10 ?? */}
    <Suspense>
    <CardSkill name={"React"} title={"React"} type={"react"}>
        <img src={reactIcon} alt="React logo" loading='lazy' />
    </CardSkill>
    <CardSkill title={"React native"}>
        <img src={reactNative} alt="React native logo" className="sm:w-[93%]" loading='lazy'  />
    </CardSkill>
    <CardSkill name={"JavaScript"} title={"JavaScript"} type={"javascript"}>
        <img src={js} alt="JavaScript logo" loading='lazy' />
    </CardSkill>
    <CardSkill name={"TypeScript"} title={"TypeScript"} type={"typescript"}>
        <img src={ts} alt="TypeScript logo" loading='lazy' />
    </CardSkill>
    <CardSkill name={"Java"} title={"Java"} type={"java"}>
        <img src={java} alt="Java logo" loading='lazy' />
    </CardSkill>
    <CardSkill name={"Spring boot"} title={"Spring boot"} type={"spring"}>
        <img src={spring} alt="Spring boot logo" className='object-contain max-sm:w-[50%]' loading='lazy' />
    </CardSkill>
    <CardSkill title={"MySql"}>
        <img src={mysql} alt="MySql logo" loading='lazy' />
    </CardSkill>
    <CardSkill name={"i18next"} title={"i18next"} type={"i18n"}>
        <img src={i18n} alt="i18next logo" loading='lazy'
        // onClick={() => window.open("https://www.i18next.com/")}
        />
    </CardSkill>
    <CardSkill name={"Tailwind"} title={"Tailwind"} type={"tailwind"}>
        <img src={tailwind} alt="Tailwind logo" loading='lazy' />
    </CardSkill>
    <CardSkill title={"Formik"}>
        <img src={formik} alt="Formik logo" loading='lazy' />
    </CardSkill>
    <CardSkill title={"Approche agile Scrum"}>
        <img src={scrum} alt="Scrum image" loading='lazy' />
    </CardSkill>
    </Suspense>
  </div>
  )
}

export default ListOfSkills
