import React from "react";
import { FaCalendarAlt, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "ongoing":
        return "bg-blue-500";
      case "paused":
        return "bg-yellow-500";
      default:
        return "bg-gray-300";
    }
  };

  const projectManager =
    project.team.find(
      (member) => member.role === "Admin" || member.role === "Manager"
    )?.name || "Not Assigned";

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-xl font-bold text-gray-800">{project.name}</h5>
        <span
          className={`px-3 py-1 rounded-full text-sm text-white ${getStatusColor(
            project.status
          )}`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="mt-2 text-sm text-gray-500 flex items-center">
        <FaCalendarAlt className="mr-2" />
        Due: {project.endDate}
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center">
          <FaUserTie className="text-lg" />
          <span className="ml-2">Project Manager: {projectManager}</span>
        </div>
        <div className="text-gray-500">Team Members: {project.team.length}</div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => navigate(`/project`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Project
        </button>
      </div>
    </div>

    // <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    //     <div className="flex justify-between items-center mb-3">
    //         <h5 className="text-xl font-bold text-gray-800">{project.name}</h5>
    //         <span className={`px-3 py-1 rounded-full text-sm text-white ${getStatusColor(project.status)}`}>
    //             {project.status}
    //         </span>
    //     </div>
    //     <p className="text-gray-600 mb-2">{project.description}</p>
    //     <div className="mt-2 text-sm text-gray-500 flex items-center">
    //         <FaCalendarAlt className="mr-2" />
    //         Due: {project.endDate}
    //     </div>
    //     <div className="flex items-center justify-between mt-3">
    //         <div className="flex items-center">
    //             <FaUserTie className="text-lg" />
    //             <span className="ml-2">Project Manager: {projectManager}</span>
    //         </div>
    //         <div className="text-gray-500">
    //             Team Members: {project.team.length}
    //         </div>
    //     </div>
    //     <div className="mt-4">
    //         <button
    //             onClick={() => navigate(`/project`)}
    //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //         >
    //             Open Project
    //         </button>
    //     </div>
    // </div>
  );
};

export default ProjectCard;
