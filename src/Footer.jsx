import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='footer_contact'>
          <span>Jerry Phuong</span>
          <span>jerryphuong.dev@gmail.com</span>
        </div>
        <div className='footer_socials'>
          <a href='https://github.com/isskor' target='_blank' rel='noreferrer'>
            <span>
              <FontAwesomeIcon
                icon={faGithubSquare}
                color={'hsl(196, 58%, 30%)'}
                size='3x'
              />
            </span>
          </a>
          <a
            href='https://linkedin.com/in/jerry-phuong-0097291b5'
            target='_blank'
            rel='noreferrer'
          >
            <span>
              <FontAwesomeIcon
                icon={faLinkedin}
                color={'hsl(196, 58%, 30%)'}
                size='3x'
              />
            </span>
          </a>
        </div>
        <div className='footer_copyrights'>
          <span>Design and Content made by Jerry Phuong</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
