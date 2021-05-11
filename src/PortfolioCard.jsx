import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
function PortfolioCard({ item, i, project }) {
  const [expand, setExpand] = useState(false);

  const fadeDown = (el) => {
    gsap.to(el, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power4.out',
    });
  };
  const fadeUp = (el) => {
    gsap.to(el, {
      duration: 1,
      opacity: 0,
      y: -60,
      ease: 'power4.out',
      delay: 0.3,
    });
  };
  const heightUp = (el) => {
    gsap.to(el, {
      duration: 1,
      height: '500px',
      ease: 'power4.out',
    });
  };
  const heightDown = (el) => {
    gsap.to(el, {
      duration: 1,
      height: '300px',
      ease: 'power4.out',
      delay: 0.4,
    });
  };

  useEffect(() => {
    if (expand) {
      fadeDown('.expand' + i);
      heightUp('.height' + i);
      return;
    }
    heightDown('.height' + i);
    fadeUp('.expand' + i);
  }, [expand, i]);

  return (
    <div
      className={`portfolio-card height${i}`}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
    >
      <div className='card_header row'>
        <div>
          <h1>{item.name}</h1>
          {/* <span className='line'></span> */}
        </div>
        <span className='index'> 0{i + 1}</span>
      </div>
      <h3>{item.desc}</h3>
      <Link to={`/project/${i + 1}`}>
        <img src={item.images[0]} alt={`${item.name} website screenshot`} />
      </Link>

      <div className={`info row expand${i}`}>
        <div className='tools'>
          {item.mainTools.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <div className='btn-ctn'>
          <a href={item.githubUrl} target='_blank'>
            Github Repo
          </a>
          <Link to={`/project/${i + 1}`}>Read More</Link>
        </div>
      </div>

      <div className={`line expand${i}`}></div>
    </div>
  );
}

export default PortfolioCard;
