import React from 'react';
import PortfolioCard from './PortfolioCard';
import { data } from './data';

function Portfolio({ portfolioRef }) {
  return (
    <>
      <div ref={portfolioRef} className='portfolio'>
        <span className='bg_title'>WORKS</span>
        <h1 className='section_title'>Portfolio</h1>
        <div className='portfolio-list'>
          {data.map((item, i) => (
            <PortfolioCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
