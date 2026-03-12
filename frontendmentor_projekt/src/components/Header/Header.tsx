import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <img
        className="headerlogo__mobile"
        src="/assets/images/logo.svg"
        alt="Logo"
      />
      <img
        className="menu__mobile"
        src="/assets/images/icon-menu.svg"
        alt="Menu"
      />
    </header>
  );
}

export default Header;
