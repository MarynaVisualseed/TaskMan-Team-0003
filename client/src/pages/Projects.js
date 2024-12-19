import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { user } from "../assets/data"; 
import Loader from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { FaPlus, FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import Tabs from "../components/Tabs";
import ProjectBoard from "../components/project/ProjectBoard";
import ProjectTable from "../components/project/ProjectTable";
import AddProject from "../components/project/AddProject";
import { projects as mockProjects } from "../assets/data";



export default function Projects() {
  const { status } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isCreating, setIsCreating] = useState(false);
  const [projects, setProjects] = useState(mockProjects);
  const [load, setLoad] = useState(false);

  const handleOpenModal = () => setIsCreating(true);
  const handleCloseModal = () => setIsCreating(false);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { ...newProject, id: Date.now().toString() },
    ]);
    handleCloseModal();
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
  };

  const filteredProjects = status
    ? projects.filter(
        (project) => project.status.toLowerCase() === status.toLowerCase()
      )
    : projects;

  const TABS = [
    {
      title: "Grid",
      icon: <MdGridView />,
      component: (
        <ProjectBoard
          projects={filteredProjects}
          onDeleteProject={handleDeleteProject}
        />
      ),
    },
    {
      title: "List",
      icon: <FaList />,
      component: (
        <ProjectTable
          projects={filteredProjects}
          onDeleteProject={handleDeleteProject}
        />
      ),
    },
  ];

  return (
    <div className="w-full">
      {load ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Title title={status ? `${status} Projects` : "All Projects"} />
            {!status && (
              <Button
                gradientDuoTone="purpleToPink"
                onClick={handleOpenModal}
                className="flex items-center justify-center"
              >
                <FaPlus className="text-lg mr-2" />
                CREATE NEW PROJECT
              </Button>
            )}
          </div>

          {/* Tabs */}
          <Tabs tabs={TABS} setSelected={setSelectedTab}>
            {TABS[selectedTab].component}
          </Tabs>

          {/* Add New Project Modal */}
          <AddProject
            open={isCreating}
            setOpen={setIsCreating}
            onAddProject={handleAddProject}
            existingProjectNames={projects.map((project) => project.name)} 
          />
        </>
      )}
    </div>
  );
}
