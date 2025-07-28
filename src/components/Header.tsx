import { useState } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { PiInstagramLogoLight, PiTelegramLogoLight } from "react-icons/pi";
import { SlClose } from "react-icons/sl";
import logoSource from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-wrap">
      <div className="container">
        <header className="header flex">
          <a href="#" className="header__logo">
            <img src={logoSource} alt="" className="header__logo-pic" />
          </a>
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`header__nav-underlay ${
              isMenuOpen ? "header__nav-underlay--show" : ""
            }`}
          ></div>
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
            <button
              onClick={() => setIsMenuOpen(false)}
              className="header__menu-close"
            >
              <SlClose />
            </button>
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
            <a
              target="_blank"
              href="https://www.instagram.com/pmtermiz/"
              className="header__social header__social--instagram"
            >
              <PiInstagramLogoLight />
            </a>
            <a
              target="_blank"
              href="https://t.me/pmtermiz"
              className="header__social"
            >
              <PiTelegramLogoLight/>
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="header__menu-button"
          >
            <HiOutlineBars3CenterLeft className="header__menu-icon" />
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
