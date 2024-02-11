import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0); // Adjust the value based on when you want the button to appear
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : "hide"}`}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp />
    </div>
  );
};

export default ScrollToTop;
