import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/valeriYanev01/Personal-Web-App" target="blank" rel="noopener">
        Build by Valeri Yanev
      </Link>
    </div>
  );
};

export default Footer;
