import { useState } from 'react';
import './Navbar.css';
import Web from './web/index';
import Mobile from './mobile/index';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = () => {
    window.scrollTo(0, 0);
  };
  window.onscroll = function () {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
        <div onClick={handleTitleClick} className="title">
          Penny Lam
        </div>
        <div className="menu">
          <div className="web-menu"><Web /></div>

          <div className="mobile-menu">
            <div onClick={() => setIsOpen(!isOpen)}>
              <i className="fi fi-rr-menu-burger menu-icon"></i>
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>
    </div>
  )
}

export default Navbar;