import { useContext, useState } from "react";

import Button from "../Button/Button";
import NMTLogo from "../../assets/logo/nmt-logo.svg";

import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import LoginDialog from "../LoginDailog/LoginDialog";
import SignupDialog from "../SignupDialog/SignupDialog";

import "./navbar.css";
import UserContext from "../../context/UserContext/UserContext";
import ProfileCard from "../ProfileCard/ProfileCard";

const NavBar = () => {
  const [isSigninFormOpen, setSigninFormOpen] = useState(false);
  const [isSignupFormOpen, setSignupFormOpen] = useState(false);

  const { pathname } = useLocation();

  const userContext = useContext(UserContext);

  const openSigninForm = () => {
    setSigninFormOpen(true);
  };

  const closeSigninForm = () => {
    setSigninFormOpen(false);
  };

  const openSignupForm = () => {
    setSignupFormOpen(true);
  };

  const closeSignupForm = () => {
    setSignupFormOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-heading">
        <Link to="/">
          <img src={NMTLogo} alt="NMT Solution" />
        </Link>
      </div>
      <div className="nav-tabs">
        <Link to="/">
          <Button variant="text" isActive={pathname === "/"}>
            Home
          </Button>
        </Link>
        <Link to="/about-us">
          <Button variant="text" isActive={pathname === "/about-us"}>
            About us
          </Button>
        </Link>
        <Link to="/#our-expertise">
          <Button variant="text">Services</Button>
        </Link>
        <Link to="/tech-offerings">
          <Button variant="text" isActive={pathname === "/technologies"}>
            Technologies
          </Button>
        </Link>

        <Link to="/our-products">
          <Button variant="text">Product Showcase</Button>
        </Link>
      </div>
      <div className="nav-account-actions">
        {userContext.user ? (
          <ProfileCard />
        ) : (
          <>
            <Button variant="text" onClick={openSigninForm}>
              Login
            </Button>
            <Button onClick={openSignupForm}>Sign Up</Button>
          </>
        )}
      </div>

      <LoginDialog
        isSigninFormOpen={isSigninFormOpen}
        closeSigninForm={closeSigninForm}
      />

      <SignupDialog
        isSignupFormOpen={isSignupFormOpen}
        closeSignupForm={closeSignupForm}
      />
    </nav>
  );
};

export default NavBar;
