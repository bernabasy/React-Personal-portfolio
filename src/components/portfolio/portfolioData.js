import Image1 from "../../assets/img/portfolio/project-11.png";
import Image2 from "../../assets/img/portfolio/project-2.png";
import Image3 from "../../assets/img/portfolio/project-3.png";
import Image4 from "../../assets/img/portfolio/project-4.png";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Ruby Full-stak app",
    image: Image4,
    tag: [],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "BootStrap ICT Solutions PLC",
        language: "'Ruby on rails', 'Bootstrap', 'Jsx'",
        preview: "link",
        link: "https://github.com/bernabasy/ToDo_list",
      },
    ],
  },
  {
    id: 7,
    type: "React Bookstore",
    image: Image2,
    tag: [],
    delayAnimation: "100",
    modalDetails: [
      {
    project: "Bookstore",
    client: "MICROVERSE",
    language: "React, Redux, CSS, Jsx",
    preview: "Link",
    link: "https://github.com/bernabasy/Bookstore",
      }
    ],
  },
  {
    id: 3,
    type: "To-Do List",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Todo list",
        client: "Educational",
        language: "html, Webpack, css, javaScript",
        preview: "Link",
        link: "https://github.com/bernabasy/ToDo_list",
      },
    ],
  },
  {
    id: 4,
    type: "React/ React.next Job Board",
    image: Image1,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "WebApp",
        client: "BootStrap ICT Solutions PLC",
        language: "React.Js, Next.js, Bootstrap",
        link: "Pleas contact me!",
      },
    ],
  },
  {
    id: 5,
    type: "HR",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "BootStrap ICT Solutions PLC",
        language: "HTML, CSS, React.JS",
        preview: "not Public",
      },
    ],
  },
  {
    id: 6,
    type: "Accounting App",
    image: Image6,
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Mobile APP",
        client: "BootStrap ICT Solutions PLC",
        language: "HTML, CSS, Javascript",
        preview: "Code No Publice But Here is a video",
        link: "https://youtu.be/JpxgqKcP708",
      },
    ],
  },
];

export default PortfolioData;
