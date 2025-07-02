import logoSrc from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="#" className="footer__logo">
            <img src={logoSrc} alt="footer logo" className="footer__pic" />
          </a>
          <div className="footer__right">
            <div className="footer__part">
              <h2 className="footer__title">Navigation</h2>
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
            <div className="footer__part">
              <h2 className="footer__title">Social media</h2>
              <div className="footer__social">
                <a href="#" className="footer__link footer__link--social">
                  <i className="footer__icon fa-brands fa-telegram"></i>
                  <span className="footer__social-text">Telegram</span>
                </a>
                <a href="#" className="footer__link footer__link--social">
                  <i className="footer__icon fa-brands fa-instagram"></i>
                  <span className="footer__social-text">Instagram</span>
                </a>
                <a href="#" className="footer__link footer__link--social">
                  <i className="footer__icon fa-brands fa-youtube"></i>
                  <span className="footer__social-text">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
