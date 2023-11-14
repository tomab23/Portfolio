import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import xlogo from "../assets/network/x-twitter.svg"

const NetworkFooter = () => {
  return (
    <div className="flex gap-5 items-center">
      <a
        href="https://github.com/tomab23"
        title="Github"
        target="_blank"
        className="cursor-pointer hover:scale-110"
      >
        <Github/>
      </a>
      <a
        href="https://www.linkedin.com/in/thomas-bartier-185752138/"
        title="LinkedIn"
        target="_blank"
        className="cursor-pointer hover:scale-110"
      >
        <Linkedin/>
      </a>
      <a
        href="https://twitter.com/toma_23_"
        title="X"
        target="_blank"
        className="cursor-pointer hover:scale-110"
      >
        <Twitter/>
        {/* <img src={xlogo} alt="X twiiter logo" className="h-5 w-5 dark:bg-white" /> */}
      </a>
    </div>
  );
};

export default NetworkFooter;
