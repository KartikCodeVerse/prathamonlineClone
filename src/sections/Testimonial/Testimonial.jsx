import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import Testimonial_Part from "../../components/Testimonial/Testimonial_Part";
import { data } from "../../assets/testimonial_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesToShow based on screen width
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    // Initial adjustment
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="testimonial_section">
      <div className="sec_container">
        <div className="title">
          <h3>STUDENT TESTIMONIAL</h3>
        </div>
        <div className="testimonials">
          <div className="testi_btn">
            <div className="btns">
              <div className="left_btn testiBtn" onClick={handlePrev}>
                <IoMdArrowDropleft />
              </div>
              <div className="right_btn testiBtn" onClick={handleNext}>
                <IoMdArrowDropright />
              </div>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {data.map((testi, i) => (
              <Testimonial_Part
                key={i}
                testi_para={testi.testi_para}
                profile_img={testi.profile_img}
                testi_name={testi.testi_name}
                testi_detail1={testi.testi_detail1}
                testi_detail2={testi.testi_detail2}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
