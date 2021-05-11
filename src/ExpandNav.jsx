import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ExpandNav = ({ setOpen }) => {
  return (
    <div className='expand_nav slide'>
      <div className='close' onClick={() => setOpen(false)}>
        <span></span>
        <span></span>
      </div>
      <ul onClick={() => setOpen(false)}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <Link to='/project/1'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>

        <li>
          <a href='https://github.com/isskor' target='_blank' rel='noreferrer'>
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
            rel='noreferrer'
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
      </ul>
    </div>
  );
};

export default ExpandNav;
