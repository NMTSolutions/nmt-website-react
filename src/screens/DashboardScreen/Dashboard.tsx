import React from "react";
import Banner from "../../components/Banner/Banner";
import OurExpertise from "../../components/OurExpertise/OurExpertise";
import UpcomingProducts from "../../components/UpcomingProducts/UpcomingProducts";
import Technologies from "../../components/Technologies/Technologies";
import Contactus from "../../components/ContactUs/Contactus";

const Dashboard = () => {
  return (
    <>
      <Banner />
      <OurExpertise />
      <UpcomingProducts />
      <Technologies />
      <Contactus />
    </>
  );
};

export default Dashboard;
