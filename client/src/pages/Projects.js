import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { FaPlus, FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import Tabs from "../components/Tabs";
import ProjectTitle from "../components/project/ProjectTitle";
import ProjectBoard from "../components/project/ProjectBoard";
import ProjectTable from "../components/project/ProjectTable";
import AddProject from "../components/project/AddProject";
import { projects as mockProjects } from "../assets/data"; // Import mockup project data

const PROJECT_STATUS = ["Ongoing", "Paused", "Completed"];

export default function Projects() {
  const { status } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isCreating, setIsCreating] = useState(false);
  const [projects] = useState(mockProjects);
  const [load, setLoad] = useState(false);

  const handleOpenModal = () => setIsCreating(true);
  const handleCloseModal = () => setIsCreating(false);

  // Filter projects by status if status param is provided
  const filteredProjects = status
    ? projects.filter(
        (project) => project.status.toLowerCase() === status.toLowerCase()
      )
    : projects;

  // Tabs configuration for grid and list views
  const TABS = [
    {
      title: "Grid",
      icon: <MdGridView />,
      component: <ProjectBoard projects={filteredProjects} />,
    },
    {
      title: "List",
      icon: <FaList />,
      component: <ProjectTable projects={filteredProjects} />,
    },
  ];

  return (
    <div className="w-full">
      {load ? (
        <Loader />
      ) : (
        <>
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
          <Tabs tabs={TABS} setSelected={setSelectedTab}>
            {/* {!status && (
              <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
                {PROJECT_STATUS.map((statusLabel, index) => (
                  <ProjectTitle
                    key={index}
                    label={statusLabel}
                    className={`bg-${statusLabel.toLowerCase()}-500`}
                  />
                ))}
              </div>
            )} */}
            {TABS[selectedTab].component}
          </Tabs>
          <AddProject open={isCreating} setOpen={setIsCreating} />
        </>
      )}
    </div>
  );
}
