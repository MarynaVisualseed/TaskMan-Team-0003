import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectBoard = ({ projects, onDeleteProject }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={() => onDeleteProject(project.id)}
        />
      ))}
    </div>
  );
};

export default ProjectBoard;
