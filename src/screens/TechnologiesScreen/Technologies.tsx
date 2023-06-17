import techOfferings from "./techOfferings";
import "./technologies.css";

const Technologies = () => {
  return (
    <section className="technologies">
      <h1>Our Technologies</h1>
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
    externalLink: string;
    animation: string;
    description: string;
  }[];
}) => {
  return (
    <section>
      <h1>{name}</h1>
      <div className="offering-group">
        {offerings.map((framework, index) => (
          <TechOfferingCard
            key={framework.name}
            {...framework}
            isEvenCard={(index + 1) % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

const TechOfferingCard = ({
  id,
  icon,
  name,
  description,
  externalLink,
  animation,
  isEvenCard,
}: {
  id: string;
  icon: string;
  name: string;
  description: string;
  externalLink: string;
  animation: string;
  isEvenCard: boolean;
}) => {
  return (
    <a href={externalLink} target="_blank" rel="noreferrer">
      <div
        id={id}
        className={`tech-offering-card ${
          isEvenCard ? "even-card" : "odd-card"
        }`}
      >
        <div className={`tech-icon ${animation}`}>
          <img src={icon} alt="Tech-Logo" width={100} height={100} />
        </div>
        <div className="tech-description">
          <h1>{name}</h1>
          {description}
        </div>
      </div>
    </a>
  );
};
