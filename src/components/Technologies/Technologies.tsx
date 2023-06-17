import { Link } from "react-router-dom";
import techOfferings from "../../screens/TechnologiesScreen/techOfferings";
import "./technologies.css";

const Technologies = () => {
  return (
    <section id="technologies" className="technologies">
      <h1>Our Tech Stack</h1>
      {techOfferings.map((tech) => (
        <TechGroup key={tech.name} {...tech} />
      ))}
    </section>
  );
};

export default Technologies;

const TechGroup = ({
  name,
  offerings,
}: {
  name: string;
  offerings: {
    id: string;
    name: string;
    icon: string;
    animation: string;
    description: string;
  }[];
}) => {
  return (
    <section>
      <h3>{name}</h3>
      <div className="tech-group no-scrollbar">
        {offerings.map((framework) => (
          <TechnologyCard key={framework.name} {...framework} />
        ))}
      </div>
    </section>
  );
};

const TechnologyCard = ({
  id,
  name,
  icon,
  animation,
}: {
  id: string;
  name: string;
  icon: string;
  animation: string;
}) => {
  return (
    <Link to={`/tech-offerings#${id}`}>
      <div id={id} className={`technology-card animation-${animation}`}>
        <img src={icon} alt="tech-icon" className="tech-icon" />
        <div className="tech-name">{name}</div>
      </div>
    </Link>
  );
};
