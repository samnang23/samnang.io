import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="navbar">
        <div className="nav-content">
          {/* <img src={photo} alt="" className="logo" /> */}
          <a href="" className="name">
            Samnang Keo
          </a>
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
            <button className="contact-btn">
              <img src="" alt="" className="menu_img" /> Contact Me
            </button>
            {/* Render the children passed from parent component */}
            {/* {props.children} */}
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              sytle={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
