import React from 'react';
import Skills from './Skills';
import gsap from 'gsap';

import { useIntersection } from 'react-use';
function About({ aboutRef, contactRef }) {
  const intersection = useIntersection(aboutRef, {
    root: null,
    rootMargin: aboutRef?.current
      ? aboutRef.current.clientHeight - 300 + 'px'
      : '0px',
    threshold: 1,
  });
  const fadeIn = (el) => {
    gsap.to(el, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power4.out',
    });
  };
  const fadeOut = (el) => {
    gsap.to(el, {
      duration: 1,
      opacity: 0,
      y: -120,
      ease: 'power4.out',
    });
  };

  aboutRef && intersection && intersection.intersectionRatio < 1
    ? // not reached
      fadeOut('.fade')
    : // reached
      fadeIn('.fade');

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={aboutRef} className='aboutContainer'>
      <div className='grid '>
        <span className='bg_title'>ABOUT</span>
        <h1 className='section_title fade'>About Me</h1>
        <div className='imgCtn fade'>
          <img src='' alt='' />
        </div>
        <div className='about fade'>
          <h2>Hello, I'm Jerry Phuong</h2>
          <h3>A Front-End Developer</h3>
          <p>
            Driven by my passion for technology and ecstatic designs, my
            objective is to create awesome websites and apps. I’m looking for an
            challange to innovate myself and make new great experiences with
            people.{' '}
          </p>

          <p>
            As a developer I love creating meaningful and interactive websites.
            I enjoy designing and fullfilling the design to reality. There is
            just something special about sketching an idea and code it to
            reality.
          </p>
          <div className='aboutList'>
            <ul>
              <li>
                Location: <span>Malmö, Sweden</span>
              </li>
              <li>
                Occupation:
                <span> Front End Developer </span>
              </li>
              <li>
                Specializes in:
                <span> React JS / Javascript </span>
              </li>
              <li>
                Status:
                <span> Seeking employment </span>
              </li>
            </ul>
          </div>
          <button onClick={() => scrollTo(contactRef)}>Contact Me</button>
        </div>
      </div>
      <div className='skills fade'>
        <span className='bg_title'>Skills</span>
        <h1 className='section_title'>Tools I Use</h1>
        <Skills />
      </div>
    </div>
  );
}

export default About;
