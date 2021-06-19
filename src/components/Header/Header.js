import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src="./logo.png" alt="logo"></img>
        <h1>Fox Tail</h1>
      </div>
    </header>
  );
};

export default Header;
