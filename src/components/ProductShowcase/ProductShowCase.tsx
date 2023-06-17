import React from "react";

import "./product-showcase.css";

import AppCraftLogo from "../../assets/svg/app-craft.svg";
import ElectroMartLogo from "../../assets/svg/electro-mart.svg";

const showCase = [
  {
    name: "App Craft", //Component Craft
    logo: AppCraftLogo,
    description:
      "Introducing our revolutionary app-building tool that lets you create stunning applications without any coding knowledge. With a simple drag-and-drop interface, you can customize your app by selecting from a wide range of pre-built components. Whether you're building a simple website or a complex business application, our app builder makes the process easy and fun. Try it out today and see how easy it is to bring your ideas to life!",
  },
  {
    name: "Electromart",
    logo: ElectroMartLogo,
    description:
      "Introducing our state-of-the-art ecommerce app designed specifically for electronic device retailers. Our app offers a seamless shopping experience, allowing your customers to easily browse and purchase the latest gadgets and electronics. With features like product search, detailed product information, and secure payment options, our app makes it easy for your customers to find and buy what they need. Take your electronic device business to the next level with our ecommerce app today!",
  },
];

const ProductShowCase = () => {
  return (
    <section id="product-showcase">
      <h1>Product Showcase</h1>
      <div className="product-showcase">
        {showCase.map((product) => (
          <ShowcaseProductCard key={product.name} {...product} type="visit" />
        ))}
      </div>
    </section>
  );
};

export default ProductShowCase;

const ShowcaseProductCard = ({
  name,
  logo,
  type,
}: {
  name: string;
  logo: string;
  type: "download" | "visit";
}) => {
  const handleClick = () => {};
  return (
    <div className="showcase-product-container" onClick={handleClick}>
      <img src={logo} alt="App Logo" className="showcase-product-icon" />
      <h2 className="showcase-product-name">{name}</h2>
      <h3 className="showcase-product-link">
        {type === "download" ? "Download" : "Visit "}
      </h3>
    </div>
  );
};
