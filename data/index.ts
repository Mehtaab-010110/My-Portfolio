import { link } from "fs";

export const navItems = [
  {name: "Home", link: "#home"},
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [{
  id: 1,
  title: "Emphasizing collaboration with team to ensure seamless project execution.",
  description: "",
  className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  imgClassName: "w-full h-full",
  titleClassName: "justify-end",
  img: "/b1.svg",
  spareImg: "",
},
{
  id: 2,
  title: "Dedicated to delivering prompt solutions.",
  description: "",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  imgClassName: "",
  titleClassName: "justify-start",
  img: "",
  spareImg: "",
},
{
  id: 3,
  title: "My tech stack",
  description: "Constantly improving",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  imgClassName: "",
  titleClassName: "justify-center",
  img: "",
  spareImg: "",
},
{
  id: 4,
  title: "Driving innovative solutions from conception to deployment.",
  description: "",
  className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-start",
  img: "/grid.svg",
  spareImg: "/b4.svg",
},
{
  id: 5,
  title: "Currently building an urban Pedestrian Commute Application.",
  description: "The Inside Scoop",
  className: "md:col-span-3 md:row-span-2",
  imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  titleClassName: "justify-center md:justify-start lg:justify-center",
  img: "/b5.svg",
  spareImg: "/grid.svg",
},
{
  id: 6,
  title: "Let's team up for your next project!",
  description: "",
  className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "",
  spareImg: "",
},];

export const projects = [
  {
    id: 2,
    title: "Carpool Proximity App - Coreo",
    des: "Spearheaded the UI/UX design, leveraging Django to contribute to the development of the Carpool Proximity Tool.",
    img: "/emma.png",
    iconLists: ["/django.svg", "/python.svg", "/ts.svg", "/tail.svg", "/azure.svg",],
    link: "https://github.com/Mehtaab-010110/Carpool-Proximity-Tool",
    alttext: "CoreoCarpoolTool",
  },
  {
    id: 1,
    title: "Nexstep - Indoor Navigation App",
    des: "Secured first place at Techstars Startup Weekend, an indoor navigation app that helps users navigate through Calgary's +15 network.",
    img: "/matisse.png",
    iconLists: ["/node.svg", "/three.svg", "/ts.svg", "/next.svg", "/vercel.svg"],
    link: "https://www.matissewebstudios.com/",
    alttext: "MatisseWebStudios",

  },
  {
    id: 3,
    title: "Traveless - Blazor Hybrid App",
    des: "Architected in Blazor Hybrid .NET MAUI, Traveless is a flight reservation system that allows users to book & reserve flights.",
    img: "/traveless.png",
    iconLists: ["/blazor.svg", "/csharp.svg", "/dotnet.svg", "/html.svg", "/sql.svg"],
    link: "https://github.com/Mehtaab-010110/Traveless",
    alttext: "FlightReservationSystem",

  },
  {
    id: 4,
    title: "Wildlife Photography Website",
    des: "Crafted a visually appealing animated website showcasing scenic pictures of nature and wildlife.",
    img: "/wildlife.png",
    iconLists: ["/re.svg", "/tail.svg", "/html.svg", "/js.svg",],
    link: "https://mehtaab-010110.github.io/Photography_Website/",
    alttext: "WildlifePhotographyWebsite",

  },
];


export const companies = [
  {
    id: 1,
    img: "/blazor.svg",
  },
  {
    id: 2,
    img: "/django.svg",
  },
  {
    id: 3,
    img: "/csharp.svg",
  },
  {
    id: 4,
    img: "/dotnet.svg",
  },
  {
    id: 5,
    img: "python.svg",
  },
  {
    id: 6,
    img: "/re.svg",
  },
  {
    id: 7,
    img: "/ts.svg",
  },
  {
    id: 8,
    img: "/tail.svg",
  },
  {
    id: 9,
    img: "/azure.svg",
  },
  {
    id: 10,
    img: "/dock.svg",
  },
  {
    id: 11,
    img: "/unity.svg",
  },
  {
    id: 12,
    img: "/vs.svg",
  },
  {
    id: 13,
    img: "/firebase.svg",
  },
  {
    id: 14,
    img: "/sql.svg",
  },


];

export const workExperience = [
  {
    id: 1,
    title: "2023",
    position: "Full Stack Developer - Intern",
    company: "Coreo Inc.",
    content: "Led the design of a pivotal web application for an upcoming carpooling company, starting with prototypes using Figma. Spearheaded the development of a state-driven user interfaces using NextJS, integrating RESTful APIs to enhance functionality. Developed a secure SQL Server database, ensuring robust data management, while deploying the application on Firebase. Implemented robust security measures - SQL injection prevention, Cross-Site Scripting (XSS) mitigation, and HTTPS encryption, following OWASP guidelines, significantly enhancing data security. Implemented CI/CD pipelines using GitLab to automate testing, building, and deployment processes, reducing deployment times by 50%, and enhancing overall efficiency. Collaborated with the team in a GitLab environment to manage version control, resulting in the successful establishment of partnerships with 11 corporate companies in Calgary",
    images: [],

  },
  {
    id: 2,
    title: "2022",
    company: "Self-Employed",
    position: "Freelance Web Developer",
    content: "Worked with 13 diverse clients to create tailored, responsive websites, delivering custom solutions for e-commerce, blogs, portfolios, and business websites. Utilized modern front-end technologies including React, NextJS, and Tailwind CSS, optimizing client sites for versatile compatibility. Integrated dynamic features such as interactive forms, custom animations, and advanced UI components to enhance engagement. Applied on-page SEO strategies, including keyword research, content optimization, and technical SEO, to increase organic traffic, resulting in measurable growth for clients. Managed end-to-end project lifecycles, collaborating directly with clients to define requirements, design user interfaces, and provide ongoing maintenance and updates, ensuring long-term website performance and client satisfaction.",
    images: [],

  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link : "https://github.com/Mehtaab-010110",
  },
  {
    id: 2,
    img: "/insta.svg",
    link : "https://www.instagram.com/mehtabs___/"
  },
  {
    id: 3,
    img: "/link.svg",
    link : "https://www.linkedin.com/in/mehtab-s/"
  },
];
