import React, { useState } from "react";
// import "./NavBar.css";

const NavBar = () => {
  return (
    // <div onClick={navToggle} className={toggleIcon}>
    <div>
      <nav>
        {/* <ul className={active}> */}
        <ul>
          <li>
            <a src="/">Link 1</a>
          </li>
          <li>
            <a src="/">Link 1</a>
          </li>
          <li>
            <a src="/">Link 1</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
