import { ArrowUpFromDot } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
    >
      <button
        onClick={scrollToTop}
        className='scroll-to-top__button'
        aria-label='Scroll to top'
      >
        <ArrowUpFromDot />
      </button>
    </div>
  );
};

export default ScrollToTop;
