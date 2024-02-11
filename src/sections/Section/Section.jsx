import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="clat_section">
      <div className="clat_container">
        <div className="left">
          <div className="clat-title">Common Law Aptitude Test</div>
          <div className="clat-des">
            <p>
              The Common Law Admission Test (CLAT) is a national level entrance
              exam for admissions to undergraduate (UG) and postgraduate (PG)
              law programmes offered by 22 National Law Universities around the
              country.
            </p>
            <br />
            <h4>Eligibility:</h4>
            <p>
              1. There will be no upper age limit for UG Programme in CLAT 2023.
            </p>
            <p>
              2. <span> Minimum percentage</span> of marks in 10+2 or an
              equivalent examination:
            </p>
            <ul>
              <li>
                <span>Forty five percent (45%)</span> marks or equivalent grade
                of candidates belonging to General / OBC / PWD / NRI / PIO / OCI
              </li>
              <li>
                <span>Forty Percent (40%) </span> marks or equivalent in case of
                candidates belonging to SC/ST categories.
              </li>
            </ul>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Section;
