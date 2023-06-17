import React from "react";
import UpcomingProducts from "../../components/UpcomingProducts/UpcomingProducts";
import ProductShowCase from "../../components/ProductShowcase/ProductShowCase";

const OurProducts = () => {
  return (
    <section className="product-showcase-screen">
      <section className="product-showcase-upcoming-products">
        <UpcomingProducts />
      </section>
      <section className="product-showcase-section">
        <ProductShowCase />
      </section>
    </section>
  );
};

export default OurProducts;
