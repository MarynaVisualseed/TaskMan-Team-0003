import React from "react";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component

const ProjectBoard = ({ projects }) => {
  return (
    <div className="card-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectBoard;

// const ProjectBoard = ({ projects }) => {
//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {projects.map(project => (
//         <ProjectCard key={project.id} project={project} />
//       ))}
//     </div>
//   );
// };

// export default ProjectBoard;
