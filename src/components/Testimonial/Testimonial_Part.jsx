import React from "react";
import "./Testimonial_Part.css";
import comaa from "../../assets/comaa.png";

const Testimonial_Part = ({
  testi_para,
  profile_img,
  testi_name,
  testi_detail1,
  testi_detail2,
}) => {
  return (
    <div className="testimonial_container">
      <div className="testimonial">
        <p>
          <img className="comaa" src={comaa} alt="" />
          {testi_para}
        </p>
      </div>
      <div className="profile">
        <div className="profile_left">
          <div className="profile_img">
            <img src={profile_img} alt="" />
          </div>
        </div>
        <div className="profile_right">
          <div className="name">
            <b>{testi_name}</b>
          </div>
          <div className="details">
            {testi_detail1}
            <br />
            {testi_detail2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial_Part;
