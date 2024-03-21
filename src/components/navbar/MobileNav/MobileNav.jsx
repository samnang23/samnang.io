import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <a href="">Samnang Keo</a>
          <ul>
            <li>
              <Link className="menuItem" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menuItem" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="menuItem" to="/skill">
                Skill
              </Link>
            </li>
            <li>
              <Link className="menuItem" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="menuItem" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button className="contact-btn">
            <img src="" alt="" className="menu_img" /> Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
