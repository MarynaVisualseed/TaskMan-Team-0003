import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaCalendarAlt, FaUserTie, FaTrashAlt } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp className="text-red-500 mr-2" />,
  medium: <MdKeyboardArrowUp className="text-orange-500 mr-2" />,
  low: <MdKeyboardArrowDown className="text-gray-500 mr-2" />,
};

const STATUS_OPTIONS = ["Not Started", "In Progress", "Completed", "On Hold"];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-500";
    case "in progress":
      return "bg-blue-500";
    case "on hold":
      return "bg-yellow-500";
    case "not started":
      return "bg-gray-400";
    default:
      return "bg-gray-300";
  }
};

const ProjectCard = ({ project, onDelete, onUpdateStatus }) => {
  const [status, setStatus] = useState(project.status); 
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate(); 

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    if (onUpdateStatus) {
      onUpdateStatus(project.id, newStatus);
    }
  };
  const projectManager =
  project.projectManager || project.team?.[0]?.name || "Not Assigned";

  const handleDeleteConfirm = () => {
    onDelete(project.id); 
    setShowModal(false); 
  };

  const handleOpenProject = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="relative card bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col justify-between">
      {/* Priority Above Project Name */}
      <div className="flex items-center mb-2">
        {ICONS[project.priority?.toLowerCase()]}
        <span
          className={`font-semibold ${
            project.priority?.toLowerCase() === "high"
              ? "text-red-500"
              : project.priority?.toLowerCase() === "medium"
              ? "text-orange-500"
              : "text-gray-500"
          }`}
        >
          {project.priority?.toUpperCase()} PRIORITY
        </span>
      </div>

      {/* Project Name and Status */}
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold text-gray-800">{project.name}</h5>
        <select
          value={status}
          onChange={handleStatusChange}
          className={`px-2 py-1 rounded-full text-white ${getStatusColor(
            status
          )}`}
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Project Description */}
      <p className="text-gray-600 mb-4">{project.description}</p>

      {/* Due Date */}
      <div className="text-sm text-gray-500 flex items-center mb-4">
        <FaCalendarAlt className="mr-2" />
        Due: {project.endDate}
      </div>

      {/* Project Manager and Team Members */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaUserTie className="text-lg" />
          <span className="ml-2">
            Project Manager: {projectManager}
          </span>
        </div>
        <div className="text-gray-500">
          Team Members: {project.team?.length || 0}
        </div>
      </div>

      {/* Buttons: Open Project and Delete */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleOpenProject}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Project
        </button>
        <button
          onClick={() => setShowModal(true)} 
          className="text-black hover:text-gray-700 p-2"
          title="Delete Project"
        >
          <FaTrashAlt className="text-lg" />
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this project?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
