import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./About.css";
import clat from "../../assets/clat.png";
import symbiosis from "../../assets/symbiosis-logo.jpg";
import nlu from "../../assets/nlu-logo.jpg";

const About = () => {
  return (
    <div className="about_section">
      <div className="sec_container">
        <div className="row flex_row">
          <div className="left_sec">
            <div className="row">
              <div className="blue_title">
                <h3>Common Law Aptitude Test</h3>
              </div>
              <div className="content">
                <p className="margin_para">
                  The Common Law Admission Test (CLAT) is a national level
                  entrance exam for admissions to undergraduate (UG) and
                  postgraduate (PG) law programmes offered by 22 National Law
                  Universities around the country.
                </p>
                <h4>Eligibility:</h4>
                <div className="eligible">
                  <ol className="left_padding">
                    <li>
                      <p className="margin_para">
                        There will be <b>no upper age limit</b> for UG Programme
                        in CLAT 2023.
                      </p>
                    </li>
                    <li>
                      <p className="margin_para">
                        <b>Minimum percentage</b> of marks in 10+2 or an
                        equivalent examination:
                      </p>
                      <ul className="left_padding">
                        <li>
                          <p className="margin_para">
                            <b>Forty five percent (45%)</b> marks or equivalent
                            grade of candidates belonging to General / OBC / PWD
                            / NRI / PIO / OCI
                          </p>
                        </li>
                        <li>
                          <p className="margin_para">
                            <b>Forty Percent (40%)</b> marks or equivalent in
                            case of candidates belonging to SC/ST categories.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <h4>CLAT Pattern</h4>
                <div className="clat_pattern">
                  <ul className="left_padding">
                    <li>
                      <p className="margin_para">
                        <b>Duration</b> 2 hours
                      </p>
                    </li>
                    <li>
                      <p className="margin_para">
                        <b>Mode:</b> Offline
                      </p>
                    </li>
                    <li>
                      <p className="margin_para">
                        <b>Total Questions:</b> 120
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table_data">
                <div className="table1">
                  <table className="table">
                    <thead>
                      <tr className="table_head">
                        <td>Section</td>
                        <td>Number of Questions (roughly)</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="grey_row">
                        <td>English Language</td>
                        <td>22-25</td>
                      </tr>
                      <tr>
                        <td>Current Affairs and GK</td>
                        <td>22-25</td>
                      </tr>
                      <tr className="grey_row">
                        <td>Legal Reasoning</td>
                        <td>28-32</td>
                      </tr>
                      <tr>
                        <td>Legal Reasoning</td>
                        <td>28-32</td>
                      </tr>
                      <tr className="grey_row">
                        <td>Quantitative Techniques</td>
                        <td>10-12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="left_padding">
                  <li>
                    <p className="margin_para">
                      <b>Marking Scheme:</b>Correct Answer +1 marks, Wrong
                      Answer -0.25 marks.
                    </p>
                  </li>
                  <li>
                    <p className="margin_para">
                      <b>Total Seats:</b>2598
                    </p>
                  </li>
                </ul>

                <div className="blue_title padding_heading">
                  <h3>Colleges and Total Seats</h3>
                </div>
                <div className="table2">
                  <table className="table">
                    <thead>
                      <tr className="table_head">
                        <td>22 Colleges Under CLAT</td>
                        <td>Seats</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          National Law School Of India University, Bengaluru
                        </td>
                        <td>180</td>
                      </tr>
                      <tr className="grey_row">
                        <td>NALSAR University of Law, Hyderabad</td>
                        <td>132</td>
                      </tr>
                      <tr>
                        <td>
                          The West Bengal National University Of Juridical
                          Science, Kolkata
                        </td>
                        <td>132</td>
                      </tr>
                      <tr className="grey_row">
                        <td>National Law University, Jodhpur</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>Gujarat national Law University, Gandhinagar</td>
                        <td>205</td>
                      </tr>
                      <tr className="grey_row">
                        <td>National Law Institute University, Bhopal</td>
                        <td>180</td>
                      </tr>
                      <tr>
                        <td>
                          Rajiv Gandhi National University Of Law, Patiala
                        </td>
                        <td>180</td>
                      </tr>
                      <tr className="grey_row">
                        <td>
                          Dr. Ram Manohar Lohia National Law University, Lucknow
                        </td>
                        <td>187</td>
                      </tr>
                      <tr>
                        <td>National Law University, Odisha</td>
                        <td>180</td>
                      </tr>
                      <tr className="grey_row">
                        <td>Maharashtra National Law University, Mumbai</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>
                          National University of Study and Research in Law,
                          Ranchi
                        </td>
                        <td>140</td>
                      </tr>

                      <tr className="grey_row">
                        <td>
                          National University of Advanced Legal Studies, Kochi
                        </td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>Chanakya National Law University, Patna</td>
                        <td>145</td>
                      </tr>

                      <tr className="grey_row">
                        <td> Maharashtra National Law University, Nagpur</td>
                        <td>120</td>
                      </tr>

                      <tr>
                        <td>
                          DamodaramSanjivayya National Law University,
                          Vishakhapatnam
                        </td>
                        <td>120</td>
                      </tr>

                      <tr className="grey_row">
                        <td>National Law School and Judicial Academy, Assam</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>Tamil Nadu NationalLaw School, Tiruchirappalli</td>
                        <td>120</td>
                      </tr>

                      <tr className="grey_row">
                        <td>
                          Himachal Pradesh National Law University, Shimla
                        </td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>Dhramashastra National Law, Jabalpur</td>
                        <td>120</td>
                      </tr>
                      <tr className="grey_row">
                        <td>Maharashtra National Law University, Aurangabad</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>
                          Dr. B.R. Ambedkar National Law University, Sonipat
                        </td>
                        <td>120</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="blue_title padding_heading">
                  <h3>CLAT 2024 Deadlines</h3>
                </div>
                <div className="table3">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Application Open</td>
                        <td> 1 July, 2023</td>
                      </tr>
                      <tr className="grey_row">
                        <td>Release of First Sample Question Set</td>
                        <td>August, 2023</td>
                      </tr>
                      <tr>
                        <td>Release of Second Sample Question Set</td>
                        <td>September,2023</td>
                      </tr>
                      <tr className="grey_row">
                        <td>Release of Third Sample Question Set</td>
                        <td>October, 2023(Tentative)</td>
                      </tr>
                      <tr>
                        <td>Last Date for receiving applications</td>
                        <td>November, 2023</td>
                      </tr>
                      <tr className="grey_row">
                        <td>CLAT 2023 Exam Date</td>
                        <td>03 December, 2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="blue_title padding_heading">
                <h3>Why PRATHAM</h3>
              </div>
              <div className="para">
                <p className="margin_para">
                  You can consider PRATHAM TEST PREP because of the faculty
                  team, ready to travel the distance to get you a seat in the
                  top tier National Law Universities. With mentors from Nalsar
                  Hyderabad, NLU Jodhpur, NLIU Bhopal, RGNUL Patiala, NLU Assam
                  you will get just the right guidance to crack an extremely
                  competitive examination like CLAT.
                </p>
                <p className="margin_para">
                  Additionally, it offers a vast set of preparation material
                  namely <b>Knowledge Primers</b> along with
                  <b>
                    Class Assignments, Home Assignments and Special Handouts
                  </b>
                  for every topic. You will get
                  <b>chapter-wise question bank and a mock test series</b> to
                  help you strategize for the exam. You will have access to an
                  online portal where you can <b>find E-lectures</b> from the
                  best faculty, exam analysis videos, and strategy sessions
                  along with regular online/offline (as you opt) classes on the
                  weekends so you are able to balance your boards and CLAT
                  preparation.
                </p>
                <p className="margin_para">
                  You can also book mentor slots to speak to a mentor
                  exclusively to address your problems and curate a study plan.
                </p>
              </div>

              <div className="blue_title padding_heading">
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
              </div>
              <div className="ques_ans">
                <div className="ques_box">
                  <p>Can I Appear For CLAT While In Class XIth?</p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    Can I Start Preparing For CLAT After My Boards Are Over?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    How Much Time Is Ideally Required To Crack A Competitive
                    Exam Like CLAT?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    Whom Do I Contact In Case Of Doubts During Online Classes?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>Is CLAT An Online Exam?</p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    When Will The CLAT Conducted This Year And What Is The
                    Application Fee?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    What Is The Last Date Of Submitting The Application Form For
                    CLAT 2023?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    Which Courses Are Available For Student Preparing For CLAT
                    And Other Law Entrances?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>
                    What Are The Other Exams Which A Serious Law Aspirant Should
                    Appear For If He/She Wants To Study From India?
                  </p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>How Is The CLAT Test Series Of PRATHAM TEST PREP?</p>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="ques_box">
                  <p>How Can I Balance Boards And CLAT Preparation?</p>
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>

              <div className="clat_entrance">
                <div className="blue_title padding_heading">
                  <h3>CLAT Entrance Preparation for</h3>
                </div>
                <div className="row">
                  <div className="img">
                    <a href="#">
                      <img src={clat} alt="university-1" />
                    </a>
                  </div>
                  <div className="img">
                    <a href="#">
                      <img src={symbiosis} alt="university-1" />
                    </a>
                  </div>
                  <div className="img">
                    <a href="#">
                      <img src={nlu} alt="university-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_sec">
            <div className="form">
              <div className="form_input">
                <h4>GET PERSONALISED COUNSELLING</h4>
                <form>
                  <div className="form_box">
                    <select
                      className="data_box"
                      required
                      aria-required="true"
                      aria-invalid="false"
                    >
                      <option value>Select Program</option>
                      <option value="Crash Course">Crash Course</option>
                      <option value="One Year Program">One Year Program</option>
                      <option value="Two Year Program">Two Year Program</option>
                      <option value="Hybrid Program">Hybrid Program</option>
                      <option value="Non Classroom Program">
                        International Education
                      </option>
                    </select>
                  </div>
                  <div className="form_box">
                    <select
                      className="data_box"
                      required
                      aria-required="true"
                      aria-invalid="false"
                    >
                      <option value>Select Course...</option>
                      <option value="Law">Law</option>
                      <option value="Mass Communication">
                        Mass Communication
                      </option>
                      <option value="Hotel Management">Hotel Management</option>
                      <option value="B.Com">B.Com</option>
                      <option value="Economics">Economics</option>
                      <option value="BCA">BCA</option>
                      <option value="SAT- Intl Edu">SAT- Intl Edu</option>
                      <option value="Financial Courses">
                        Financial Courses
                      </option>
                    </select>
                  </div>
                  <div className="form_box flex_input">
                    <input
                      type="text"
                      className="data_box input_box"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="data_box input_box"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form_box flex_input">
                    <input
                      type="text"
                      className="data_box input_box"
                      placeholder="Phone"
                    />
                    <input
                      type="text"
                      className="data_box input_box"
                      placeholder="Email"
                    />
                  </div>
                </form>
                <div className="form_box flex_input">
                  <input
                    type="text"
                    className="data_box input_box"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    className="data_box input_box"
                    placeholder="School"
                  />
                </div>
                <div className="form_box">
                  <select
                    className="data_box"
                    required
                    aria-required="true"
                    aria-invalid="false"
                  >
                    <option value>Select Class</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                </div>
                <div className="form_box">
                  <button className="form_btn">
                    <span>Submit</span> <LiaGreaterThanSolid />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
