import React from 'react';

function SkillCard({ skill, i }) {
  const c = i > 3 && i < 8 ? 'secondRow' : i > 7 ? 'thirdRow' : '';
  return (
    <div className={`skill-card ${c}`}>
      <div className='img_ctn'>
        <img src={skill.image} alt='' />
      </div>
      <p>{skill.name}</p>
    </div>
  );
}

export default SkillCard;
