import React from "react";
import Slider from "react-slick";
import "./Universities.css";
import { univesities_img } from "../../assets/universities_data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Universities = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="universities_sections">
      <div className="sec_container">
        <div className="universities_heading">
          <h3>Popular Universities / Entrances</h3>
        </div>

        <Slider {...settings}>
          {univesities_img.map((university, index) => (
            <div className="img_item" key={index}>
              <a href="#">
                <img
                  src={Object.values(university)[0]}
                  alt={`university-${index}`}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Universities;
