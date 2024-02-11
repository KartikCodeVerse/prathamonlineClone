import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import "./Info.css";
import ScrollToTop from "../../components/ScrollToTopBtn/ScrollToTop";

const Info = () => {
  return (
    <div className="info">
      <div className="info_container">
        <div className="info-content rights">
          <p>&#169; Copyright IIFM Ltd. | All Right Reserved</p>
        </div>
        <div className="info-content  contact">
          <p>
            <IoIosCall /> +91- 99999 75392 , 011-42 666 000
          </p>
        </div>
        <div className="info-content mail">
          <IoMdMail /> INFO@PRATHAMONLINE.COM
        </div>
      </div>
      <div className="scroll_btn">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Info;
