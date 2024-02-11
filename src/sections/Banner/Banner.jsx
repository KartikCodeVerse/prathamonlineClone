import React from "react";
import { IoHome } from "react-icons/io5";
import "./Banner.css";

import mobile_banner from "../../assets/law-new-mobile.png";
import Carousel from "../../components/Carousel/Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="slider-banner">
          <div className="banner-img">
                 <Carousel />
          </div>
    
          <div className="banner-mobile">
            <img src={mobile_banner} alt="" />
          </div>
        </div>
        <div className="directory">
          <span>
            <IoHome /> / Pages / Common Law Aptitude Test
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
