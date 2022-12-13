import React from "react";
import Github from "../assets/github.svg";

function Footer() {
  return (
    <div className="footer">
      <p>
        By Mustafa 2022
        <a
          href="https://github.com/mustafa-bhm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="icon" className="icon" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
