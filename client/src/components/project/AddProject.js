import React, { useState } from "react";
import ModalWindow from "../ModalWindow";
import { DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Textbox from "../Textbox";
import SelectList from "../SelectList";
import Button from "../Button";
import ListUsers from "./ListUsers"; 
import { user } from "../../assets/data";

const PRIORITY_LEVELS = ["High", "Medium", "Low"];

const AddProject = ({ open, setOpen, onAddProject, existingProjectNames }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [team, setTeam] = useState([]);
  const [priority, setPriority] = useState(PRIORITY_LEVELS[1]);

  const submitHandler = (data) => {
    const currentUser = user.name;

    // Create project 
    const fullProjectData = {
      ...data,
      status: "Not Started",
      priority,
      team: [{ name: currentUser, role: "Project Manager" }, ...team],
      projectManager: currentUser,
    };

    onAddProject(fullProjectData);
    setOpen(false);
  };

  return (
    <ModalWindow open={open} setOpen={setOpen}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-6 p-4 px-6 md:px-8"
      >
        {/* Title */}
        <DialogTitle as="h3" className="text-2xl font-bold text-gray-900 mb-6">
          Add New Project
        </DialogTitle>

        {/* Project Name */}
        <Textbox
          placeholder="Enter project name"
          name="name"
          label="Project Name"
          register={register("name", {
            required: "Project name is required",
            maxLength: {
              value: 30,
              message: "Name cannot exceed 30 characters",
            },
            validate: (value) => {
              if (existingProjectNames.includes(value.trim())) {
                return "Project name must be unique";
              }
              return true;
            },
          })}
          error={errors.name?.message}
          className="w-full h-12"
        />

        {/* Project Description */}
        <Textbox
          placeholder="Describe the project"
          name="description"
          label="Project Description"
          register={register("description", {
            required: "Description is required",
            maxLength: {
              value: 120,
              message: "Description cannot exceed 120 characters",
            },
          })}
          error={errors.description?.message}
          className="w-full h-12"
        />

        {/* Start Date and End Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textbox
            type="date"
            name="startDate"
            label="Start Date"
            register={register("startDate", {
              required: "Start date is required",
            })}
            error={errors.startDate?.message}
            className="w-full h-12"
          />
          <Textbox
            type="date"
            name="endDate"
            label="End Date"
            register={register("endDate", {
              required: "End date is required",
              validate: (value) =>
                new Date(value) >= new Date(watch("startDate")) ||
                "End date cannot be before start date",
            })}
            error={errors.endDate?.message}
            className="w-full h-12"
          />
        </div>

        {/* Budget */}
        <Textbox
          placeholder="Enter project budget"
          name="budget"
          label="Budget"
          register={register("budget", {
            required: "Budget is required",
            valueAsNumber: true,
            min: {
              value: 10,
              message: "Budget must be at least 10",
            },
            validate: (value) =>
              value > 0 || "Budget must be a positive number",
          })}
          error={errors.budget?.message}
          className="w-full h-12"
        />

        {/* Priority */}
        <SelectList
          label="Priority Level"
          lists={PRIORITY_LEVELS}
          selected={priority}
          setSelected={setPriority}
          className="w-full h-12"
        />

        {/* Team Members */}
        <ListUsers team={team} setTeam={setTeam} className="w-full" />

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            type="button"
            label="Cancel"
            onClick={() => setOpen(false)}
            gradientDuoTone="pinkToOrange"
            className="px-5 py-2 text-sm font-semibold"
          />
          <Button
            type="submit"
            label="Submit"
            gradientDuoTone="purpleToPink"
            className="px-8 py-2 text-sm font-semibold"
          />
        </div>
      </form>
    </ModalWindow>
  );
};

export default AddProject;
