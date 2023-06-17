import React from "react";
import Dashboard from "./../screens/DashboardScreen/Dashboard";
import Technologies from "../screens/TechnologiesScreen/Technologies";
import Aboutus from "../screens/AboutUsScreen/AboutUs";
import PrivacyPolicy from "../screens/PrivacyPolicyScreen/PrivacyPolicy";
import Terms from "../screens/TermsScreen/Terms";
import OurProducts from "../screens/OurProducts/OurProducts";

export enum Routes {
  Dashboard = "/",
  TechOfferings = "/tech-offerings",
  AboutUs = "/about-us",
  OurProducts = "/our-products",
  PrivacyPolicy = "/privacy-policy",
  Terms = "/terms",
}

export interface IRoute {
  name: string;
  path: Routes;
  component: React.FC;
}

const routes: IRoute[] = [
  { name: "Dashboard", path: Routes.Dashboard, component: Dashboard },
  {
    name: "Technical Offerings",
    path: Routes.TechOfferings,
    component: Technologies,
  },
  { name: "About us", path: Routes.AboutUs, component: Aboutus },
  { name: "Our Products", path: Routes.OurProducts, component: OurProducts },
  {
    name: "Privacy Policy",
    path: Routes.PrivacyPolicy,
    component: PrivacyPolicy,
  },
  { name: "Terms & Conditions", path: Routes.Terms, component: Terms },
];

export default routes;
