import React from "react";
import "./Footer.css";
import logo from "../../assets/pratham-logo.png";
import fb from "../../assets/facebook.png";
import twitter from "../../assets/twitar.png";
import linkdin from "../../assets/linkedin.png";
import google from "../../assets/google+.png";
import { FaGreaterThan } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_row1">
        <div className="sec_container">
          <div className="row">
            <div className="col1">
              <div className="logo_img">
                <img src={logo} alt="" />
              </div>

              <p>
                PRATHAM is an educational institute that remains adamant in
                emerging as one of the leading institutes, enhancing the budding
                youth into successful individuals.
              </p>

              <div className="social">
                <h4 className="social_heading">We're Social</h4>
                <div className="social_icons">
                  <a className="social_icon" href="#">
                    <img style={{ width: "10px" }} src={fb} alt="" />
                  </a>
                  <a className="social_icon" href="#">
                    <img style={{ width: "20px" }} src={twitter} alt="" />
                  </a>
                  <a className="social_icon" href="#">
                    <img style={{ width: "20px" }} src={linkdin} alt="" />
                  </a>
                  <a className="social_icon" href="#">
                    <img style={{ width: "25px" }} src={google} alt="" />
                  </a>
                </div>
              </div>
              <br />
              <a href="#">Terms of Service & Policies</a>
            </div>
            <div className="col2 col">
              <div className="col_heading">
                <h3>TOP COURSES</h3>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>CUET</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>CLAT</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>IIM Indore, IPM</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>IIM Rohtak, IPM</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>NLU Delhi</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col3 col">
              <div className="col_heading">
                <h3>PREP MODULE</h3>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>2 Year Program</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>1 Year Program</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>Hybrid Program</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>Crash Course</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>International Education</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>Correspondence Course</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col4">
              <div className="col_heading">
                <h3>GET IN TOUCH</h3>
              </div>
              <div className="location contact">
                <FaLocationDot className="contact_icons" />
                <p>
                  PRATHAM Head Office HS-13, 2nd Floor, Kailash Colony Main
                  Market New Delhi 110048
                </p>
              </div>
              <div className="phone contact">
                <FaPhoneAlt className="contact_icons" />
                <p> +91- 99999 75392</p> <p>011-42 666 000</p>
              </div>
              <div className="mail contact">
                <SiMaildotru className="contact_icons" />
                <p>info@prathamonline.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_row2">
        <div className="sec_container">
          <div className="footer2_heading">
            <h3>PARTNERS</h3>
          </div>
          <div className="partners">
            <div className="partner">
              <a href="#">IIFM</a>
            </div>
            <div className="partner">
              <a href="#">NCFM Drivatives</a>
            </div>
            <div className="partner">
              <a href="#">FIREFISH</a>
            </div>
            <div className="partner">
              <a href="#">PRIMARY OLYMPIAD</a>
            </div>
            <div className="partner">
              <a href="#">INTERNATIONAL FINANCE OLYMPIAD</a>
            </div>
            <div className="partner">
              <a href="#">GLOBAL ECONOMICS OLYMPIAD</a>
            </div>
            <div className="partner">
              <a href="#">GLOBAL OLYMPIAD ON APTITUDE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
