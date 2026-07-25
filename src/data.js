export const NAV_LINKS = ["Home", "Skills", "Projects", "Certificates", "About"];

export const PROFILE = {
  email: "charithkale@gmail.com",
  phone: "+919701998229",
  phoneDisplay: "+91 9701998229",
};

export const SKILLS = [
  { group: "Frontend", items: ["React JS", "JavaScript (ES6+)", "HTML5", "CSS3", "React Router v6"] },
  { group: "Backend", items: ["Python", "Django", "REST APIs"] },
  { group: "Database", items: ["MongoDB", "MySQL"] },
  { group: "Tools & Cloud", items: ["Git & GitHub", "OCI Foundations", "VS Code"] },
];

export const PROJECTS = [
  {
    title: "CareerConnect",
    desc: "A job finder and application tracker built with React JS. Features auth context, job listing context, saved-application tracking, and React Router v6 navigation, with a Django REST API integration layer in progress.",
    tags: ["React JS", "React Router", "Context API", "Django (in progress)"],
  },
  {
    title: "Portfolio Website",
    desc: "This personal portfolio — a responsive, single-page React site showcasing skills, projects, and certifications with a dark, developer-focused aesthetic.",
    tags: ["React JS", "CSS3", "Responsive Design"],
  },
];

export const CERTIFICATES = [
  {
    title: "Skyscanner Front-End Software Engineering Job Simulation",
    org: "Forage",
    date: "June 2026",
    note: "Built a front-end web application as a simulated Front-End Engineer at Skyscanner using React. Developed a travel date-picker page using Skyscanner's Backpack React component library and ran automated tests to verify rendering and functionality.",
    image: "/public/certificates/Skyscanner front end.jpg",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    org: "Forage",
    date: "June 2026",
    note: "Completed a simulated data analysis and forensic technology engagement for Deloitte Australia. Built an interactive data dashboard using Tableau and used Excel to classify datasets and derive business conclusions.",
    image: "/public/certificates/Deloitte Data Analytics certification.jpg",
  },
  {
    title: "SQL Bootcamp",
    org: "Lets Upgrade",
    date: "June 2026",
    note: "Completed SQL Bootcamp certificate from Lets Upgrade.",
    image: "/public/certificates/sql.jpg.jpg",
  },
  {
    title: "Node.js Bootcamp",
    org: "Lets Upgrade",
    date: "June 2026",
    note: "Completed Node.js Bootcamp certificate from Lets Upgrade.",
    image: "/public/certificates/Node.js.jpg",
  }
];