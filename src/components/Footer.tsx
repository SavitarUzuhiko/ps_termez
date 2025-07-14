import logoSrc from "../assets/logo.png";
import { IoLocation } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__flexbox">
        <div className="footer__inner">
          <a href="#" className="footer__logo">
            <img src={logoSrc} alt="footer logo" className="footer__pic" />
          </a>
          <div className="footer__parts">
            <div className="footer__part">
              <div className="footer__navigation footer__navigation--mb">
                <a
                  href="#"
                  className="footer__link footer__link--flex footer__link--flex-map"
                >
                  <span className="footer__link-circle">
                    <IoLocation />
                  </span>
                  <span className="footer__link-text">
                    Surkhandarya, Termez, Hakim at-Termiziy st., 34b
                  </span>
                </a>
                <a href="#" className="footer__link footer__link--flex">
                  <span className="footer__link-circle">
                    <IoCallSharp />
                  </span>
                  <span className="footer__link-text">+998554520922</span>
                </a>
                <a href="#" className="footer__link footer__link--flex">
                  <span className="footer__link-circle">
                    <FaEnvelopeOpenText />
                  </span>
                  <span className="footer__link-text">info@pstmz.uz</span>
                </a>
              </div>
              <div className="footer__social">
                <a href="#" className="footer__link footer__link--social">
                  <i className="footer__icon fa-brands fa-telegram"></i>
                </a>
                <a href="#" className="footer__link footer__link--social">
                  <i className="footer__icon fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="footer__link footer__link--social">
                  <i className="footer__icon fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="footer__part">
              <div className="footer__navigation">
                <a href="#" className="footer__link">
                  About
                </a>
                <a href="#" className="footer__link">
                  Groups
                </a>
                <a href="#" className="footer__link">
                  Teachers
                </a>
                <a href="#" className="footer__link">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <p className="footer__text">
            &copy; 2025 Termez Presidential School. All rights reserved.
          </p>
        </div>
        <div className="footer__map">
          <a
            className="footer__map-link"
            href="https://yandex.uz/maps/org/108084779373/?utm_medium=mapframe&utm_source=maps"
          >
            Presidential School
          </a>
          <iframe
            className="footer__map-iframe"
            src="https://yandex.uz/map-widget/v1/?ll=67.284977%2C37.242002&mode=search&oid=108084779373&ol=biz&z=16.75"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
