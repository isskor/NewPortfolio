import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

function SideNav({ homeRef, aboutRef, portfolioRef }) {
  const aboutIntersect = useIntersection(aboutRef, {
    root: null,
    rootMargin: '1400px',
    threshold: 1,
  });
  const homeIntersect = useIntersection(homeRef, {
    root: null,
    rootMargin: '500px',
    threshold: 1,
  });
  const portIntersect = useIntersection(portfolioRef, {
    root: null,
    rootMargin: '1000px',
    threshold: 1,
  });

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className='sidenav'>
      <li
        className={homeIntersect?.isIntersecting ? 'active' : ''}
        onClick={() => scrollTo(homeRef)}
      >
        Home
      </li>
      <li
        className={aboutIntersect?.isIntersecting ? 'active' : ''}
        onClick={() => scrollTo(aboutRef)}
      >
        About
      </li>
      <li
        className={portIntersect?.isIntersecting ? 'active' : ''}
        onClick={() => scrollTo(portfolioRef)}
      >
        Portfolio
      </li>
    </ul>
  );
}

export default SideNav;
