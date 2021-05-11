import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { data } from './data';
import PortfolioCard from './PortfolioCard';
const project = {
  name: 'Padel Shack',
  desc: 'FullStack CRUD e-commerce for Padel Stuff ',
  mainTools: ['React', 'Mongo-DB', 'JS', 'NodeJS'],
  subTools: [
    'Redux',
    'Firebase',
    'Material-UI',
    'axios',
    'mongoose',
    'JWT',
    'stripe',
  ],
  info: `A full-stack e-commerce for Padel rackets and related accessories. The application  features CRUD operations for admins and has authentication and protected router powered by firebase and JSON-webtokens. The shop features 8 different filter options as well as pagination and sorting. Payment is done by stripe (however only for testing, no actual purchase will be made) `,
  githubUrl: 'https://github.com/isskor/PadelShack',
  siteUrl: 'https://padel-shack-v1.vercel.app/',
  images: [
    'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/padelshack_beqekk.jpg',
    'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/padelshack1_goazah.jpg',
    'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/padelshack3_slz9zd.jpg',
    'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/padelshack4_f3n6wv.jpg',
    'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/padelshack5_ciyoce.jpg',
    'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/padelshack6_epzeet.jpg',
  ],
};

function Project() {
  const { id } = useParams();
  const [images, setImages] = useState(data[id - 1]?.images);
  useEffect(() => {
    setImages(data[id - 1]?.images);
  }, [id]);
  if (!data[id - 1]) {
    return <Redirect to='/' />;
  }

  const handleImages = (img) => {
    const slicedImages = data[id - 1]?.images.filter((i) => i !== img);
    const newImgs = [img, ...slicedImages];
    setImages(newImgs);
  };

  const {
    mainTools,
    subTools,
    name,
    desc,
    info,
    githubUrl,
    githubUrl2,
    siteUrl,
  } = data[id - 1];

  return (
    <>
      <div className='project-ctn'>
        <div className='project'>
          <h1>
            0{id} {name}
          </h1>
          <h3>{desc}</h3>
          <div className='img-grid'>
            <div className='mainImg'>
              <img src={images[0]} alt={`${name} website`} />
            </div>
            <div className='imgs'>
              {images.slice(1).map((img, i) => (
                <img
                  src={img}
                  alt={`${name} website`}
                  onClick={() => handleImages(img)}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className='info'>
            <p>{info}</p>
          </div>
          <div className='more'>
            <button>
              More Projects
              <span>
                <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' />
              </span>
            </button>
          </div>
          <div className='project_btn'>
            <a href={siteUrl} target='_blank' rel='noreferrer'>
              See Live
            </a>
            <a href={githubUrl} target='_blank' rel='noreferrer'>
              Github Repo
            </a>
            {githubUrl2 && (
              <a href={githubUrl2} target='_blank' rel='noreferrer'>
                Github Repo2
              </a>
            )}
          </div>
        </div>
        <div className='tools'>
          <ul className='project-tool-list'>
            <div className='maintools'>
              <h5>Main Tools</h5>
              {mainTools.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </div>
            <div className='subtools'>
              <h5 className='sub'>Additional Tools</h5>
              {subTools?.map((s, j) => (
                <li key={j} className='subTools'>
                  {s}
                </li>
              ))}
            </div>
          </ul>
          <div className='btn-ctn'>
            <a href={siteUrl} target='_blank' rel='noreferrer'>
              See Live
            </a>
            <a href={githubUrl} target='_blank' rel='noreferrer'>
              Github Repo
            </a>
            {githubUrl2 && (
              <a href={githubUrl2} target='_blank' rel='noreferrer'>
                Github Repo2
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='projects'>
        <h2>More Projects</h2>
        <div className='portfolio-list'>
          {data.map((item, i) => (
            <PortfolioCard key={i} item={item} i={i} project />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
