import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import banner1 from "../../assets/b1.jpg";
import banner2 from "../../assets/b2.jpg";
import banner3 from "../../assets/b3.jpg";
import banner4 from "../../assets/law.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Slide 1" />
      </div>
      <div>
        <img src={banner2} alt="Slide 2" />
      </div>
      <div>
        <img src={banner3} alt="Slide 1" />
      </div>
      <div>
        <img src={banner4} alt="Slide 2" />
      </div>
    </Slider>
  );
};

export default Carousel;
