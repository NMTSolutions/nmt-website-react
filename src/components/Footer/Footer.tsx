import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms</Link>
      </section>
      <section>Copyright © 2023 Nano Macro Technological Solutions</section>
      <section>
        <Link to="#">Facebook</Link>
        <Link to="#">Twitter</Link>
        <Link to="#">LinkedIn</Link>
        <Link to="#">Youtube</Link>
      </section>
    </footer>
  );
};

export default Footer;
