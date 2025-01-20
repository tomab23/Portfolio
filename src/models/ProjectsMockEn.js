import treizzer from "../assets/projects/Treizzer/tzr_accueil.png"
import treizzerSong from "../assets/projects/Treizzer/tzr_song.png"
import treizzerAlbum from "../assets/projects/Treizzer/tzr_album.png"
import treizzerDetail from "../assets/projects/Treizzer/tzr_albumDetail.png"
import treizzerShop from "../assets/projects/Treizzer/tzr_shop.png"
import pokedexHome from "../assets/projects/Pokedex/pokedex_home.png"
import pokedex from "../assets/projects/Pokedex/pokedex_pokemon.png"
import marioPizza from "../assets/projects/MarioPizza/MarioPizza_img.png"
import financeOpen from "../assets/projects/SoftwareBusiness/FinanceOpen.png"
import finance from "../assets/projects/SoftwareBusiness/Finance.png"
import financeCreation from "../assets/projects/SoftwareBusiness/Creation.png"
import financeLogin from "../assets/projects/SoftwareBusiness/PageLogin.png"
import codrive from "../assets/projects/CoDrive/Codrive.png"
import codriveAdmin from "../assets/projects/CoDrive/admin.png"
import dodgeThem from "../assets/projects/DodgeThemGame/dtg_img.png"
import portfolio from "../assets/projects/Portfolio/ImagePortfolio.png"
import portfolio2 from "../assets/projects/Portfolio/ImagePortfolio2.png"
import GsWainting from "../assets/projects/GamesSearch/gs-waiting.png"

export const ProjectsMockEn = [
    {
        id: 1,
        name: "Treizzer",
        resume: "First project",
        badge: ["HTML", "CSS", "Javascript"],
        tech: ["HTML", "CSS", "Javascript"],
        outil:["Miro", "GitHub", "Visual Studio Code"],
        description: "Project carried out as part of the nursery, during 5 weeks of discovery, with 3 other people, we had a common thread. To create an application like Spotify.",
        more: "",
        date: "2022",
        github: "https://github.com/tomab23/TreizzerApp",
        site: "",
        imgs: [treizzer, treizzerAlbum, treizzerDetail, treizzerSong, treizzerShop],
        incoming: false
    },
    {
        id: 2,
        name: "Pokedex",
        resume: "Discover React js",
        badge: ["React js", "Java", "MySql"],
        tech: ["React js", "Typescript", "Java", "Spring boot", "MySql"],
        outil:["Visual Studio Code", "Eclipse", "Dbeaver"],
        description: "During my training and to discover React js, I set up a pokedex.",
        more: "The first version is just visual without registration but a second version has been made keeping the frontend and adding a backend. The website shows the first version.",
        date: "2022",
        github: "https://github.com/tomab23/PokemonPokedex",
        site: "https://pokedex-app-532e3.web.app",
        imgs: [pokedexHome, pokedex],
        incoming: false
    },
    {
        id: 3,
        name: "Mario Pizza",
        resume: "Mobile application",
        badge: ["React Native", "Java", "MySql"],
        tech: ["React Native", "Expo", "Typescript", "Java", "Spring boot", "MySql"],
        outil:["Trello", "Figma", "Postman", "Dbeaver", "Eclipse", "Visual Studio Code"],
        description: "Done during an exam, Starting from a design brief, I created this mobile pizza delivery application. I had to set up a database, linked to a Java backend all with a native React frontend using expo. The main functions include creating customer accounts, connecting to the application, and managing orders with a choice of pizzas.",
        more: "",
        date: "2022",
        github: "https://github.com/tomab23/AppPizza",
        site: "",
        imgs: [marioPizza],
        incoming: false
    },
    {
        id: 4,
        name: "Business software",
        resume: "Internship application",
        badge: ["React js", "Java", "MySql"],
        tech: ["React js", "Typescript", "Material UI", "Java", "Spring boot", "Maven", "MySql", "Formik", "Yup", "I18Next"],
        outil:["Github", "Trello", "Miro", "Discord", "Lucidchart", "Postman", "Dbeaver", "Eclipse", "Visual Studio Code"],
        description: "As part of a work placement in a team with four other developers, we designed and developed a business management application. The application had to allow us to consult a dashboard, manage services, customers, invoices and view financial movements. We used an agile approach, Scrum, to work on this project, with each member of our group focusing on one feature. For my part, I focused on connectivity, back-end security and financial transaction management.",
        more: "Technical constraints included the use of React.js, TypeScript, npm, Formik, Yup, Material UI and i18Next on the front end. On the backend, Spring boot, Java and Maven. On the database side, a MySQL database.",
        date: "2023",
        github: "https://github.com/tomab23/StageCDA",
        site: "",
        imgs: [financeOpen, finance, financeCreation, financeLogin],
        incoming: false
    },
    {
        id: 5,
        name: "CoDrive",
        resume: "Carpooling application",
        badge: ["HTML", "CSS", "Javascript"],
        tech: ["React js", "Javascript", "Tailwindcss", "Redux", "Java", "Spring boot", "Maven", "Lombok", "Mapstruct", "Formik", "Yup"],
        outil:["Github", "Jira", "Discord", "Postman", "Dbeaver", "IntelliJ", "Visual Studio Code"],
        description: "During this collaborative experience of several months in an incubator, as part of a team consisting of a QA tester, a designer and four other developers, our mission was to design a car-sharing web application. As a group, we managed the entire development process, from design to database, backend and frontend, using an agile approach.",
        more: "",
        date: "2023",
        github: "https://github.com/tomab23/CoDrive",
        site: "",
        imgs: [codrive, codriveAdmin],
        incoming: false
    },
    {
        id: 6,
        name: "Dodge them game",
        resume: "First game with Godot",
        badge: ["GDScript"],
        tech: ["GDScript"],
        outil:["Godot"],
        description: "Being a big video game player, I challenged myself to learn how to make them, and with Godot's help I created this little game.",
        more: "The aim of the game is to avoid the enemies that randomly appear on the screen for as long as possible.",
        date: "2024",
        github: "https://github.com/tomab23/DodgeThemGame",
        site: "",
        imgs: [dodgeThem],
        incoming: false
    },
    {
        id: 7,
        name: "Portfolio",
        resume: "More information on the portfolio",
        badge: ["React js", "Tailwind", "Javascript"],
        tech: ["React js", "Tailwindcss", "Javascript", "I18Next"],
        outil:["Visual Studio Code"],
        description: "Here is my portfolio (which you are currently viewing). This is the very first version. You can access the code via Github below.",
        more: "The aim was to create a portfolio from scratch, with a few features such as email contact via a form, a choice of language (French - English) and the addition of a dark mode with a choice of whether to use it or not, all while being responsive. I also had fun adding version notes so I could see the status of old and future updates.",
        date: "2023 - 2024",
        github: "https://github.com/tomab23/Portfolio",
        site: "https://thomas-bartier.netlify.app/",
        imgs: [portfolio, portfolio2],
        incoming: false
    },
    // {
    //     id: 8,
    //     name: "GamesSearch",
    //     resume: "Information on video games",
    //     badge: ["React js", "Javascript", "DaisyUI"],
    //     tech: ["React js","Javascript", "DaisyUI", "I18Next", "Formik"],
    //     outil:["Visual Studio Code"],
    //     description: "GamesSearch is an application that allows you to search for information about video games. It is currently under development.",
    //     more: "Following the release of version 1, version 2 will be available, allowing users to create an account and mark games as favourites. They will also be able to classify games into a list of games to play or a list of completed games, indicating the number of hours spent completing each game.",
    //     date: "2024",
    //     github: "https://github.com/tomab23/GamesSearch",
    //     site: "https://gamessearch.netlify.app/",
    //     imgs: [GsWainting],
    //     incoming: true
    // },
  ];