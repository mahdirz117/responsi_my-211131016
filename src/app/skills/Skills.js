// src/app/skills/Skills.js
"use client"; // Menandai file ini sebagai Client Component

import { useState } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState('/skill-image.png');

  const skills = [
    { name: 'JavaScript', img: '/path-to-js-image.jpg' },
    { name: 'React', img: '/path-to-react-image.jpg' },
    { name: 'Next.js', img: '/path-to-nextjs-image.jpg' },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <img src={currentSkill} alt="Current Skill" className={styles.skillImage} />
      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <li
            key={index}
            className={styles.skillItem}
            onMouseEnter={() => setCurrentSkill(skill.img)}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
