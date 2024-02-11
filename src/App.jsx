import React from "react";
import Header from "./sections/Header/Header.jsx";
import Banner from "./sections/Banner/Banner.jsx";
import Info from "./sections/Info/Info.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import Testimonial from "./sections/Testimonial/Testimonial.jsx";
import PreModules from "./sections/PreModules/PreModules.jsx";
import Universities from "./sections/Universities/Universities.jsx";
import StepArea from "./sections/StepArea/StepArea.jsx";
import About from "./sections/About/About.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <StepArea />
      <Universities />
      <PreModules />
      <Testimonial />
      <Footer />
      <Info />
    </div>
  );
};

export default App;
