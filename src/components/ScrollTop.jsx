import React, { useState, useEffect } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [scrollYPos, setScrollYPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollYPos(e.currentTarget.scrollY);
    });
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {scrollYPos > 70 && (
        <div className="scrollToTop" onClick={scrollTop}>
          Top
        </div>
      )}
    </>
  );
};

export default ScrollTop;
