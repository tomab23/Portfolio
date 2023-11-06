
import img1 from "../assets/images/presentation.png"
import img2 from "../assets/images/stack/formik.png"
import img3 from "../assets/images/stack/scrum.png"

const en = localStorage.getItem("i18nextLng") === "en";

export const ProjectsMock = [
    {
        id: 1,
        name: "test_un",
        resume: en ? "Welcome on the project 1" : "bienvenue sur le projet 1",
        img: img1,
        tech: ["React", "Java", "MySql"],
    },
    {
        id: 2,
        name: "test_deux",
        resume: en ? "Welcome on the project 2" : "bienvenue sur le projet 2",
        img: img2,
        tech: ["React", "Java", "MySql"],
    },
    {
        id: 3,
        name: "test_trois",
        resume: en ? "Welcome on the project 3" : "bienvenue sur le projet 3",
        img: img3,
        tech: ["React", "Java", "MySql"],
    }
  ];