import AppCraftLogo from "../../assets/svg/app-craft.svg";
import EloctroMartLogo from "../../assets/svg/electro-mart.svg";
import "./upcoming-products.css";

const upcomingProducts = [
  {
    name: "App Craft", //Component Craft
    logo: AppCraftLogo,
    description:
      "Introducing our revolutionary app-building tool that lets you create stunning applications without any coding knowledge. With a simple drag-and-drop interface, you can customize your app by selecting from a wide range of pre-built components. Whether you're building a simple website or a complex business application, our app builder makes the process easy and fun. Try it out today and see how easy it is to bring your ideas to life!",
  },
  {
    name: "Electromart",
    logo: EloctroMartLogo,
    description:
      "Introducing our state-of-the-art ecommerce app designed specifically for electronic device retailers. Our app offers a seamless shopping experience, allowing your customers to easily browse and purchase the latest gadgets and electronics. With features like product search, detailed product information, and secure payment options, our app makes it easy for your customers to find and buy what they need. Take your electronic device business to the next level with our ecommerce app today!",
  },
];

const UpcomingProducts = () => {
  return (
    <section id="upcoming-products">
      <h1>Upcoming Products</h1>
      <div className="upcoming-products">
        {upcomingProducts.map((product) => (
          <UpcomingProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingProducts;

const UpcomingProductCard = ({
  name,
  logo,
  description,
}: {
  name: string;
  logo: string;
  description: string;
}) => {
  return (
    <div className="upcoming-product">
      <div className="upcoming-product-container">
        <h2 className="upcoming-product-name">{name}</h2>
        <img src={logo} alt="App Logo" className="upcoming-product-logo" />
        <div className="upcoming-product-description">{description}</div>
      </div>
    </div>
  );
};
