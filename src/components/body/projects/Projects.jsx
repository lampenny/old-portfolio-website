import './projects.css';
import { ProjectData } from "../../../data/projects.jsx";
import ProjectCard from './ProjectCard';

const Projects = () => {
  const data = ProjectData;

  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  )
};

export default Projects;