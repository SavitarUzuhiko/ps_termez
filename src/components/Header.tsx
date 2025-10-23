import { useState } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { SlClose } from 'react-icons/sl';
import logoSource from '../assets/logo.png';
import { externalLinks, headerNavigateData , scrollTo} from '../data/header';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='header-wrap'>
      <div className='container'>
        <header className='header flex'>
          <span
            onClick={() => scrollTo(0, setIsMenuOpen)}
            className='header__logo'
            style={{ cursor: 'pointer' }}
          >
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
            {headerNavigateData.map((item) => (
                <span key={item.name+item.addToTop}
                  onClick={() => scrollTo(item.to, setIsMenuOpen, item.addToTop)}
                  className='nav__link'
                >
                  {item.name}
                </span>
            ))}
          </nav>
          <div className='header__socials'>
            {externalLinks.map((item) => (
              <a key={item.name+item.icon}
                target='_blank'
                href={item.href}
                className={item.additionalClass}
              >
                <item.icon />
              </a>
            ))}
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
