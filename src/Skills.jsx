import React from 'react';
import SkillCard from './SkillCard';
import html5 from './assets/images/html5.svg';
import react from './assets/images/react.svg';
import js from './assets/images/js.svg';
import vue from './assets/images/vue.svg';
import node from './assets/images/node.svg';
import css from './assets/images/css.svg';
import sass from './assets/images/sass.svg';
import styledcomponents from './assets/images/styledcomponents.svg';
import github from './assets/images/github.svg';
import sqlite from './assets/images/sqlite.svg';
import mongodb from './assets/images/mongodb.svg';

function Skills() {
  const skills = [
    {
      name: 'React',
      image: react,
    },
    {
      name: 'Javascript',
      image: js,
    },
    {
      name: 'VueJS',
      image: vue,
    },
    {
      name: 'HTML5',
      image: html5,
    },
    {
      name: 'NodeJS',
      image: node,
    },
    {
      name: 'CSS',
      image: css,
    },
    {
      name: 'Sass',
      image: sass,
    },
    {
      name: 'Styled Components',
      image: styledcomponents,
    },
    {
      name: 'Github',
      image: github,
    },
    {
      name: 'SQLite',
      image: sqlite,
    },
    {
      name: 'MongoDB',
      image: mongodb,
    },
  ];
  return (
    <div className='skill_list'>
      {skills.map((skill, i) => (
        <SkillCard skill={skill} i={i} key={i} />
      ))}
    </div>
  );
}

export default Skills;
