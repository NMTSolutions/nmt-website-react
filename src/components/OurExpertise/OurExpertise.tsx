import WebSvg from "../../assets/svg/web.svg";
import PhoneSvg from "../../assets/svg/phone.svg";
import ServerSvg from "../../assets/svg/server.svg";
import MaintenanceSvg from "../../assets/svg/maintenance.svg";

import "./our-expertise.css";

const expertises = [
  {
    icon: WebSvg,
    heading: "Web App Development",
    description:
      "Our team of experienced developers specializes in creating custom web applications using cutting-edge technologies, ensuring high-performance, scalability, and security for your business needs.",
  },
  {
    icon: PhoneSvg,
    heading: "Native Mobile Apps Development",
    description:
      "We offer native mobile app development services for both iOS and Android platforms, creating high-quality, custom mobile apps that are optimized for performance, usability, and security to engage your audience effectively.",
  },
  {
    icon: ServerSvg,
    heading: "Server Integration",
    description:
      "Our team has extensive experience in server integration, enabling seamless data exchange, enhanced security, and improved scalability for your apps. We use the latest technologies and industry best practices to deliver the highest level of server integration for our clients.",
  },
  {
    icon: MaintenanceSvg,
    heading: "24X7 Maintenance & Support",
    description:
      "Our maintenance and support services ensure that your app remains up-to-date, secure, and optimized for peak performance. We offer flexible maintenance plans to meet the unique needs of your business, providing ongoing support to help you stay ahead of the competition.",
  },
];

const OurExpertise = () => {
  return (
    <section id="our-expertise">
      <h1>Our Expertise</h1>
      <div className="our-expertise">
        {expertises.map((expertise) => (
          <ExpertiseCard key={expertise.heading} {...expertise} />
        ))}
      </div>
    </section>
  );
};

export default OurExpertise;

const ExpertiseCard = ({
  icon,
  heading,
  description,
}: {
  icon: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="expertise-card">
      <div className="heading">
        <img className="graphic" src={icon} alt={heading} />
        <h3 className="label">{heading}</h3>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};
