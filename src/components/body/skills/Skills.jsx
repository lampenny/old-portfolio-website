import './skills.css';
import { SkillsData } from '../../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  const data = SkillsData;

  return (
    <div className="skills">
      <label className="section-title">Languages & Tools</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;