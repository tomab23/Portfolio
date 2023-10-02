import LinkAbout from "./LinkAbout";
import pres from "../../assets/images/presentation.png"

const About = () => {
  return (
    <div className="flex flex-col w-[65vw] gap-2">
      {/* INFOS */}
      <div className="bg-blue-500 flex p-5">
        <div>Présentation</div>
        <img src={pres} alt="" className="h-80 w-80" />
      </div>

      {/* LINKS */}
      <LinkAbout />
    </div>
  );
};

export default About;
