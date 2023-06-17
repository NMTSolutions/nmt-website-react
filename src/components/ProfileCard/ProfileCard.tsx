import React, { useContext, useState } from "react";

import UserContext from "../../context/UserContext/UserContext";

import UserSVG from "../../assets/svg/user.svg";
import ArrowUp from "../../assets/svg/arrow-up.svg";
import ArrowDown from "../../assets/svg/arrow-down.svg";

import "./profile-card.css";

const ProfileCard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const userContext = useContext(UserContext);

  return (
    <div
      className="profile-card"
      onClick={() => setIsProfileOpen((prev) => !prev)}
    >
      <img className="profile-card image" src={UserSVG} alt="Account" />
      <div className="profile-card name">{userContext.user?.username}</div>
      <img
        className="profile-card arrow"
        src={isProfileOpen ? ArrowUp : ArrowDown}
        alt="Arrow"
      />
      {isProfileOpen && (
        <div className="profile-card-menu">
          {/* <div>Profile</div> */}
          <div onClick={() => userContext.signout()}>Signout</div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
