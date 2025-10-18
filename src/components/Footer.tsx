import { FaEnvelopeOpenText } from 'react-icons/fa';
import { IoCallSharp, IoLocation } from 'react-icons/io5';
import {
  PiInstagramLogoLight,
  PiTelegramLogoLight,
  PiYoutubeLogoLight,
} from 'react-icons/pi';
import logoSrc from '../assets/logo.png';
import { headerNavigateData, scrollTo } from '../data/header';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__flexbox'>
        <div className='footer__inner'>
          <div className='footer__logo-wrap'>
            <a href='#' className='footer__logo'>
              <img src={logoSrc} alt='footer logo' className='footer__pic' />
            </a>
          </div>
          <div className='footer__parts'>
            <div className='footer__part'>
              <div className='footer__navigation footer__navigation--mb'>
                <a
                  href='https://yandex.uz/maps/-/CHHlRPoN'
                  className='footer__link footer__link--flex footer__link--flex-map'
                  target='_blank'
                >
                  <span className='footer__link-circle'>
                    <IoLocation />
                  </span>
                  <span className='footer__link-text'>
                    Surkhandarya, Termez, Hakim at-Termiziy st., 34b
                  </span>
                </a>
                <a
                  href='tel:+998554520922'
                  className='footer__link footer__link--flex'
                >
                  <span className='footer__link-circle'>
                    <IoCallSharp />
                  </span>
                  <span className='footer__link-text'>+998554520922</span>
                </a>
                <a
                  href='mailto:info@pstmz.uz'
                  className='footer__link footer__link--flex'
                >
                  <span className='footer__link-circle'>
                    <FaEnvelopeOpenText />
                  </span>
                  <span className='footer__link-text'>info@pstmz.uz</span>
                </a>
              </div>
              <div className='footer__social'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/pmtermiz/'
                  className='footer__link footer__link--social'
                >
                  <PiInstagramLogoLight />
                </a>
                <a
                  target='_blank'
                  href='https://t.me/pmtermiz'
                  className='footer__link footer__link--social'
                >
                  <PiTelegramLogoLight />
                </a>
                <a
                  target='_blank'
                  href='https://www.youtube.com/@termizshahridagiprezidentm4414'
                  className='footer__link footer__link--social'
                >
                  <PiYoutubeLogoLight />
                </a>
              </div>
            </div>
            <div className='footer__part'>
              <div className='footer__navigation'>
                {headerNavigateData.map((item) => (
                  <span
                    key={item.name + item.addToTop}
                    onClick={() => scrollTo(item.to, () => {}, item.addToTop)}
                    className='footer__link'
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className='footer__text footer__text--desktop'>
            &copy; 2025 Termez Presidential School. All rights reserved.
          </p>
        </div>
        <div className='footer__map'>
          <a
            className='footer__map-link'
            href='https://yandex.uz/maps/org/108084779373/?utm_medium=mapframe&utm_source=maps'
          >
            Presidential School
          </a>
          <iframe
            className='footer__map-iframe'
            src='https://yandex.uz/map-widget/v1/?ll=67.284977%2C37.242002&mode=search&oid=108084779373&ol=biz&z=16.75'
            allowFullScreen={true}
          ></iframe>
        </div>
        <p className='footer__text--mobile'>
          &copy; 2025 Termez Presidential School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
