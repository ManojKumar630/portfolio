import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import Footer from '../footer';
/**
 * @typedef {import('../types').Skill} Skill
 */
// Import multiple icon packs
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import { Container } from 'react-bootstrap';

const iconLibraries = {
  fa: FaIcons,
  si: SiIcons,
  md: MdIcons,
  // You can add more here like ai: AiIcons, etc.
};

const getIconComponent = (iconIdentifier) => {
  if (!iconIdentifier) return <FaIcons.FaQuestionCircle />;
  const [lib, iconName] = iconIdentifier.split(':');
  const library = iconLibraries[lib.toLowerCase()];
  const Icon = library?.[iconName];
  return Icon ? <Icon /> : <FaIcons.FaQuestionCircle />;
};

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }
    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div>
    <Container className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{getIconComponent(skill.icon)}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
       </Container>
      <Footer />
    </div>
  );
};

export default Skills;
