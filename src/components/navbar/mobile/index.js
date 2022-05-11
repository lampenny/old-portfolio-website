import React from "react";
import './mobile.css';

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i className="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        {/* <a href='#about' className="mobile-option">
          <i className="fi fi-rr-portrait option-icon"></i>&nbsp;About
        </a> */}
        {/* <a href='#projects' className="mobile-option">
          <i className="fi fi-rr-duplicate option-icon"></i>&nbsp;Projects
        </a> */}
        <a href='#skills' className="mobile-option">
          <i className="fi fi-rr-cube option-icon"></i>&nbsp;Skills
        </a>
        <a href='#contact' className="mobile-option">
          <i className="fi fi-rr-at option-icon"></i>&nbsp;Contact
        </a>
      </div>
    </div>
  );
};

export default Mobile;