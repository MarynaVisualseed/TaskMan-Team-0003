import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectTable = ({ projects }) => {
    const navigate = useNavigate();

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed': return 'text-green-500 font-semibold';
            case 'ongoing': return 'text-blue-500 font-semibold';
            case 'paused': return 'text-yellow-500 font-semibold';
            default: return 'text-gray-500';
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full leading-normal border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Title</th>
                        <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Description</th>
                        <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Due Date</th>
                        <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 text-sm text-gray-900 font-medium">{project.name}</td>
                            <td className="p-3 text-sm text-gray-600">{project.description}</td>
                            <td className="p-3 text-sm">
                                <span className={getStatusColor(project.status)}>{project.status}</span>
                            </td>
                            <td className="p-3 text-sm text-gray-600">{project.endDate}</td>
                            <td className="p-3 text-sm">
                                <button
                                    onClick={() => navigate(`/project`)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                                >
                                    Open Project
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;
