// import ReactIcon from "../assets/svg/react-native.svg";
import ReactIcon from "../../assets/svg/react-native.svg";
import AngularIcon from "../../assets/svg/angular.svg";
import FlutterIcon from "../../assets/svg/flutter.svg";
import NodeJSIcon from "../../assets/svg/node-js.svg";
import PythonIcon from "../../assets/svg/python.svg";
import NextJSIcon from "../../assets/svg/next-js.svg";
import MongoDBIcon from "../../assets/svg/mongo-db.svg";
import MySqlIcon from "../../assets/svg/my-sql.svg";
import OracleIcon from "../../assets/svg/oracle.svg";
import FirebaseIcon from "../../assets/svg/firebase.svg";
import CSSIcon from "../../assets/svg/css.svg";
import TailwindIcon from "../../assets/svg/tailwind.svg";
import MUIIcon from "../../assets/svg/mui.svg";
import SASSIcon from "../../assets/svg/sass.svg";
import StyledComponentsIcon from "../../assets/svg/styled-components.svg";

const techOfferings = [
  {
    name: "Frontend Frameworks",
    offerings: [
      {
        id: "react",
        name: "React",
        icon: ReactIcon,
        animation: "spin",
        externalLink: "https://reactjs.org/",
        description:
          "We use React to create high-performance web applications that are scalable and easy to maintain, leveraging its ability to efficiently update and render UI components.",
      },
      {
        id: "angular",
        name: "Angular",
        icon: AngularIcon,
        animation: "scale",
        externalLink: "https://angular.io/",
        description:
          "Angular allows us to create robust web applications with its powerful features such as dependency injection, two-way data binding, and component-based architecture, making it easy to develop complex applications.",
      },
    ],
  },
  {
    name: "Native Frameworks",
    offerings: [
      {
        id: "react-native",
        name: "React Native",
        icon: ReactIcon,
        animation: "spin",
        externalLink: "https://reactnative.dev/",
        description:
          "React Native helps us build high-quality, custom mobile apps for both iOS and Android platforms, with the added benefit of code reusability and faster development time.",
      },
      {
        id: "flutter",
        name: "Flutter",
        icon: FlutterIcon,
        animation: "scale",
        externalLink: "https://flutter.dev/",
        description:
          "Flutter allows us to build beautiful, fast, and natively compiled mobile apps for both iOS and Android platforms, providing a seamless and consistent experience across multiple devices.",
      },
    ],
  },
  {
    name: "Backend Frameworks",
    offerings: [
      {
        id: "node-js",
        name: "Node JS",
        icon: NodeJSIcon,
        animation: "spin",
        externalLink: "https://nodejs.org/",
        description:
          "Node JS is a powerful tool for building scalable, high-performance backend applications, allowing us to build fast and efficient server-side applications.",
      },
      {
        id: "python",
        name: "Python",
        icon: PythonIcon,
        animation: "spin",
        externalLink: "https://www.python.org/",
        description:
          "Python is our preferred language for developing complex algorithms and machine learning models, allowing us to deliver intelligent solutions for our clients.",
      },
    ],
  },
  {
    name: "Fullstack Frameworks",
    offerings: [
      {
        id: "next-js",
        name: "Next JS",
        icon: NextJSIcon,
        animation: "spin",
        externalLink: "https://nextjs.org/",
        description:
          "With Next JS, we build performant and SEO-friendly web applications with advanced features such as server-side rendering, static site generation, and API routes. We also leverage Next JS's built-in support for TypeScript and modern front-end technologies to build high-quality web applications.",
      },
    ],
  },
  {
    name: "Database",
    offerings: [
      {
        id: "mongo-db",
        name: "Mongo DB",
        icon: MongoDBIcon,
        animation: "scale",
        externalLink: "https://www.mongodb.com/",
        description:
          "Mongo DB is our preferred NoSQL database for building scalable and flexible applications. We leverage its document-oriented data model and indexing capabilities to create efficient and performant applications.",
      },
      {
        id: "my-sql",
        name: "MySQL",
        icon: MySqlIcon,
        animation: "scale",
        externalLink: "https://www.mysql.com/",
        description:
          "MySQL is a powerful relational database management system that we use to build scalable and secure web applications. Its support for transactions, indexing, and clustering makes it ideal for mission-critical applications.",
      },
      {
        id: "oracle",
        name: "Oracle",
        icon: OracleIcon,
        animation: "scale",
        externalLink: "https://www.oracle.com/",
        description:
          "Oracle is an enterprise-level database management system that we use to build complex and scalable applications. We leverage its features such as partitioning, clustering, and high availability to create highly performant applications for our clients.",
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: FirebaseIcon,
        animation: "scale",
        externalLink: "https://firebase.google.com/",
        description:
          "Firebase is a powerful mobile and web application development platform that we use to build scalable and performant applications with features like real-time database, cloud messaging, and authentication. We leverage its serverless architecture to create highly scalable and flexible applications for our clients.",
      },
    ],
  },
  {
    name: "UI Frameworks (Web)",
    offerings: [
      {
        id: "css",
        name: "CSS 3",
        icon: CSSIcon,
        animation: "scale",
        externalLink: "https://www.css3.com/",
        description:
          "CSS 3 provides us with advanced styling options, allowing us to create visually stunning websites and web applications with advanced animations and transitions.",
      },
      {
        id: "tailwind",
        name: "Tailwind",
        icon: TailwindIcon,
        animation: "scale",
        externalLink: "https://tailwindcss.com/",
        description:
          "Tailwind is a utility-first CSS framework that helps us create responsive and customizable web designs faster and more efficiently.",
      },
      {
        id: "mui",
        name: "MUI",
        icon: MUIIcon,
        animation: "scale",
        externalLink: "https://mui.com/",
        description:
          "Material UI provides us with pre-designed React components that allow us to build beautiful, responsive, and accessible web applications with ease.",
      },
      {
        id: "sass",
        name: "SASS",
        icon: SASSIcon,
        animation: "scale",
        externalLink: "https://sass-lang.com/",
        description:
          "Sass is a powerful CSS extension language that allows us to write clean and efficient stylesheets, with features like variables, mixins, and nesting, making it easy to maintain and scale our styles.",
      },
      {
        id: "styled-components",
        name: "Styled Components",
        icon: StyledComponentsIcon,
        animation: "scale",
        externalLink: "https://styled-components.com/",
        description:
          "Styled Components allows us to create reusable UI components with scoped styles, making it easy to maintain and update the styles across our application.",
      },
    ],
  },
];

export default techOfferings;
