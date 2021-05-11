import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ExpandNav from './ExpandNav';
import gsap from 'gsap';
function TopNav({ contactRef }) {
  const [open, setOpen] = useState(false);

  const slideIn = (el) => {
    gsap.to(el, {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: 'power4.out',
    });
  };
  const slideOut = (el) => {
    gsap.to(el, {
      duration: 1,
      opacity: 0,
      x: -220,
      ease: 'power4.out',
    });
  };

  useEffect(() => {
    if (open) {
      slideIn('.slide');
      return;
    }
    slideOut('.slide');
  }, [open]);

  const o = () => {
    setOpen(true);
  };

  return (
    <>
      <nav>
        <div className='expandNav' onClick={o}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className='topnav'>
          <div className='links'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <Link to='/project/1'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>

            <li>
              <a href='https://github.com/isskor' target='_blank'>
                <span>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    color={'hsl(196, 58%, 30%)'}
                    size='2x'
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com/in/jerry-phuong-0097291b5'
                target='_blank'
              >
                <span>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color={'hsl(196, 58%, 30%)'}
                    size='2x'
                  />
                </span>
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <ExpandNav setOpen={setOpen} />
    </>
  );
}
export default TopNav;
