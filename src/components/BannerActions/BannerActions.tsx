import React from "react";
import Button from "../Button/Button";

const BannerActions = () => {
  return (
    <div className="banner-actions">
      <a href="#contact-us">
        <Button>Subscribe</Button>
      </a>
      <a href="#upcoming-products">
        <Button variant="outlined">Our Products</Button>
      </a>
    </div>
  );
};

export default BannerActions;
