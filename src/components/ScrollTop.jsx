import React from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="scrollToTop" onClick={() => scroll()}>
        top
      </div>
    </>
  );
};

export default ScrollTop;
