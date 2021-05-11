import React from 'react';
import Canvas from './Canvas';
import './App.css';
import p from './assets/images/p.svg';
import j from './assets/images/j.svg';
function Home({ homeRef, aboutRef, portfolioRef }) {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={homeRef} className='home'>
      <div className='box'></div>
      <Canvas />

      <span className='bg_title'>HELLO</span>
      <div className='header_text'>
        <h1>
          {' '}
          <span className='iam'>I'm </span> <br />
          <span className='name'>Jerry Phuong</span>
          <span className='FED'>FRONT END DEVELOPER</span>
        </h1>
        {/* <h1>FRONT END</h1>
        <h1> DEVELOPER </h1> */}

        <div className='btnCtn'>
          <div className='btn_wrapper'>
            <button className='action1' onClick={() => scrollTo(aboutRef)}>
              Who am I?
            </button>
            <span></span>
          </div>
          <div className='btn_wrapper'>
            <button onClick={() => scrollTo(portfolioRef)}>My Works</button>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
