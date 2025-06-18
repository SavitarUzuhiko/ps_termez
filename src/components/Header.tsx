import { useState } from "react";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import logoSource from "../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container">
      <header className="header flex">
        <a href="#" className="header__logo">
          <img src={logoSource} alt="" className="header__logo-pic" />
        </a>
        <nav
          onAnimationEnd={(e) => {
            const target = e.target as HTMLDivElement;
            if (target.matches(".hide")) {
              console.log("ha");
              target.classList.remove("show", "hide");
            }
          }}
          className={`nav header__nav ${isMenuOpen ? "show" : "hide show"}`}
        >
          <a href="#" className="nav__link">
            Home
          </a>
          <a href="#" className="nav__link">
            About
          </a>
          <a href="#" className="nav__link">
            Groups
          </a>
          <a href="#" className="nav__link">
            Teachers
          </a>
          <a href="#" className="nav__link">
            Contact
          </a>
        </nav>
        <div className="header__socials">
          <a href="#" className="header__social">
            <BsTelegram />
          </a>
          <a href="#" className="header__social header__social--instagram">
            <RiInstagramFill />
          </a>
        </div>
        <button onClick={toggleMenu} className="header__menu-button">
          <svg
            className="ham"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#fff"
            strokeWidth=".6"
            fill="rgba(0,0,0,0)"
            strokeLinecap="round"
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </button>
      </header>
    </div>
  );
};

export default Header;
