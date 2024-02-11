import React from "react";
import "./PreModules.css";
import { FaGreaterThan } from "react-icons/fa";

const PreModules = () => {
  return (
    <div className="preModules_section">
      <div className="sec_container">
        <div className="modules_row">
          <h3>Prep Modules</h3>
          <div className="modules">
            <div className="col">
              <ul>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> TWO YEAR PROGRAM</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> ONE YEAR PROGRAM</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>RETAKER PROGRAM</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> HYBRID PROGRAM</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> CRASH COURSE</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> SAT® PREPARATION</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span>ONLINE STUDY MATERIAL MATERIAL</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> ONLINE STUDY MATERIAL LAW</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGreaterThan />
                    <span> COUNSELING DIVISION</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreModules;
