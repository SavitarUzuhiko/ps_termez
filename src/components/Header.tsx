import { useState } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { PiInstagramLogoLight, PiTelegramLogoLight } from 'react-icons/pi';
import { SlClose } from 'react-icons/sl';
import logoSource from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (target: string | number, minus?: number) => {
    if (typeof target === 'string') {
      // Scroll to element by selector
      const element = document.querySelector(target);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - (minus || 0);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      const offsetPosition = target - (minus || 0);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className='header-wrap'>
      <div className='container'>
        <header className='header flex'>
          <span onClick={() => scrollTo(0)} className='header__logo' style={{cursor:'pointer'}}>
            <img src={logoSource} alt='' className='header__logo-pic' />
          </span>
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`header__nav-underlay ${
              isMenuOpen ? 'header__nav-underlay--show' : ''
            }`}
          ></div>
          <nav
            onAnimationEnd={(e) => {
              const target = e.target as HTMLDivElement;
              if (target.matches('.hide')) {
                console.log('ha');
                target.classList.remove('show', 'hide');
              }
            }}
            className={`nav header__nav ${isMenuOpen ? 'show' : 'hide show'}`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className='header__menu-close'
            >
              <SlClose />
            </button>
            <span onClick={() => scrollTo(0)} className='nav__link'>
              Home
            </span>
            <span onClick={() => scrollTo('.about')} className='nav__link'>
              About
            </span>
            <span
              onClick={() => scrollTo('.program', 100)}
              className='nav__link'
            >
              Groups
            </span>
            <span onClick={() => scrollTo('.team', 130)} className='nav__link'>
              Teachers
            </span>
            <span onClick={() => scrollTo('.footer')} className='nav__link'>
              Contact
            </span>
          </nav>
          <div className='header__socials'>
            <a
              target='_blank'
              href='https://www.instagram.com/pmtermiz/'
              className='header__social header__social--instagram'
            >
              <PiInstagramLogoLight />
            </a>
            <a
              target='_blank'
              href='https://t.me/pmtermiz'
              className='header__social'
            >
              <PiTelegramLogoLight />
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className='header__menu-button'
          >
            <HiOutlineBars3CenterLeft className='header__menu-icon' />
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
