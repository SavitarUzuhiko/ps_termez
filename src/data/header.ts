
import { PiInstagramLogoLight, PiTelegramLogoLight } from 'react-icons/pi';
export const headerNavigateData = [
    {
        name: 'Home',
        to: 0,
        addToTop: 0
    },
    {
        name: 'About',
        to: '.about',
        addToTop: 0
    },
    {
        name: 'Groups',
        to: '.program',
        addToTop: 100
    },
    {
        name: 'Teachers',
        to: '.team',
        addToTop: 130
    },
    {
        name: 'Contact',
        to: '.footer',
        addToTop: 0
    },
]

export const externalLinks=[
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pmtermiz/',
    icon: PiInstagramLogoLight,
    additionalClass: 'header__social header__social--instagram'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/pmtermiz',
    icon: PiTelegramLogoLight,
    additionalClass: 'header__social'
  }
]
export const scrollTo = (
  target: string | number,
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>,
  minus?: number
) => {
  if (typeof target === 'string') {
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
  setMenu?.(false);
};