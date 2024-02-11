import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import logo from "../../assets/pratham.png";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className="header">
      <div className="first">
        <div className="container-hide">
          <div className="btn">
            <a href="">Pay Online</a>
          </div>
          <div className="btn">
            <a href="">Register</a>
          </div>
        </div>
        <div className="container">
          <div className="col-left">
            <marquee>
              <p className="marquee">
                Registrations Open for CUET | CLAT | IPMAT 2024 and 2025
              </p>
            </marquee>
          </div>
          <div className="col-right">
            <div className="btn">
              <a href="">Pay Online</a>
            </div>
            <div className="btn">
              <a href="">Register</a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#about">PRE MODULES</a>
                <IoMdArrowDropdown />
              </li>
              <li>
                <a href="#about">COURSES</a>
                <IoMdArrowDropdown />
              </li>
              <li>
                <a href="#about">RESULTS</a>
                <IoMdArrowDropdown />
              </li>
              <li>
                <a href="#about">BLOGS</a>
              </li>
              <li>
                <a href="#about">CONTACT</a>
              </li>
              <li>
                <a href="#about">CAREER</a>
              </li>
              <li>
                <a href="#about">LOGIN</a>
              </li>
              <li>
                <a href="#about">PARTNERS</a>
              </li>
            </ul>
          </div>
          <div className="nav-burger">
            <GiHamburgerMenu onClick={handleNavToggle} />
          </div>
        </div>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#about">PRE MODULES</a>
              <IoMdArrowDropdown />
            </li>
            <li>
              <a href="#about">COURSES</a>
              <IoMdArrowDropdown />
            </li>
            <li>
              <a href="#about">RESULTS</a>
              <IoMdArrowDropdown />
            </li>
            <li>
              <a href="#about">BLOGS</a>
            </li>
            <li>
              <a href="#about">CONTACT</a>
            </li>
            <li>
              <a href="#about">CAREER</a>
            </li>
            <li>
              <a href="#about">LOGIN</a>
            </li>
            <li>
              <a href="#about">PARTNERS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
