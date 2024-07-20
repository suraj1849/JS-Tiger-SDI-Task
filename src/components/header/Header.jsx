import React from "react";
import BellIcon from "../../assets/icons/bell.png";
import Avatar from "../../assets/icons/avatar.png";
import ArrowBlack from "../../assets/icons/arrow_black.png";
import "./header.css";

const Header = ({ pageTitle }) => {
  return (
    <>
      <header>
        <span className="page__title">{pageTitle}</span>
        <span className="other__info">
          <img src={BellIcon} alt="Notifications" />
          <div className="account">
            <img src={Avatar} alt="Avatar" />
            <div className="user__details">
              <span className="username">Edward William</span>
              <span className="role">Admin</span>
            </div>
          </div>
          <img src={ArrowBlack} alt="Account Dropdown" />
        </span>
      </header>
    </>
  );
};

export default Header;
