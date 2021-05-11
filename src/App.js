import React, { useRef } from 'react';

import './sass/App.scss';
import SideNav from './SideNav';
import TopNav from './TopNav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Project from './Project';
import { Route } from 'react-router-dom';

import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='app'>
      <ScrollToTop>
        <Route exact path='/'>
          <Home
            homeRef={homeRef}
            aboutRef={aboutRef}
            portfolioRef={portfolioRef}
          />
          <About aboutRef={aboutRef} contactRef={contactRef} />
          <Portfolio portfolioRef={portfolioRef} />
          <Contact contactRef={contactRef} />
          <SideNav
            homeRef={homeRef}
            aboutRef={aboutRef}
            portfolioRef={portfolioRef}
            contactRef={contactRef}
          />
        </Route>
        <Route path='/project/:id'>
          <Project />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <TopNav
          contactRef={contactRef}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
        />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
