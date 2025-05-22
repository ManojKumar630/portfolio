import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import Footer from '../footer';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import { Container } from 'react-bootstrap';

const iconLibraries = {
  fa: FaIcons,
  si: SiIcons,
  md: MdIcons,
};

const getIconComponent = (iconIdentifier) => {
  if (!iconIdentifier) return <FaIcons.FaQuestionCircle />;
  const [lib, iconName] = iconIdentifier.split(':');
  const library = iconLibraries[lib.toLowerCase()];
  const Icon = library?.[iconName];
  return Icon ? <Icon /> : <FaIcons.FaQuestionCircle />;
};

const groupSkillsByCategory = (skills) => {
  const map = new Map();

  for (const skill of skills) {
    const categoryId = skill.category.id;
    if (!map.has(categoryId)) {
      map.set(categoryId, {
        category: skill.category,
        skills: [],
      });
    }
    map.get(categoryId).skills.push(skill);
  }

  // Convert to sorted array by category.order
  return Array.from(map.values()).sort(
    (a, b) => a.category.order - b.category.order
  );
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

  const groupedSkills = groupSkillsByCategory(skillsData);

  return (
    <div>
      <Container className="skills-container">
        {groupedSkills.map((group, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{group.category.name}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="icon">{getIconComponent(skill.icon)}</div>
                  <h3 className="skill-name">
                    {skill.name.split('').map((letter, i) => (
                      <span
                        key={i}
                        className="letter"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
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
