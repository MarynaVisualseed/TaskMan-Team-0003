import React, { useState } from "react";
import ModalWindow from "../ModalWindow";
import { DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Textbox from "../Textbox";
import SelectList from "../SelectList";
import Button from "../Button";
import UserList from "./UserList";

const PRIORITY_LEVELS = ["High", "Medium", "Low"];
const PROJECT_STATUS = ["Active", "Completed"];

const AddProject = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [team, setTeam] = useState([]);
  const [status, setStatus] = useState(PROJECT_STATUS[0]);
  const [priority, setPriority] = useState(PRIORITY_LEVELS[1]);
  const [budget, setBudget] = useState("");

  const submitHandler = (data) => {
    const fullProjectData = {
      ...data,
      team,
      priority,
    };
    console.log("Project Data:", fullProjectData);
    setOpen(false);
  };

  return (
    <ModalWindow open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DialogTitle
          as="h3"
          className="text-lg font-bold leading-6 text-gray-900 mb-7"
        >
          Add New Project
        </DialogTitle>

        <div className="w-full mt-2 flex flex-col gap-4">
          <Textbox
            placeholder="Enter project name"
            name="name"
            label="Project Name"
            register={register("name", {
              required: "Project name is required",
            })}
            error={errors.name?.message}
            className="w-full h-12 rounded-md"
          />

          <Textbox
            placeholder="Describe the project"
            name="description"
            label="Project Description"
            register={register("description", {
              required: "Description is required",
            })}
            error={errors.description?.message}
            className="w-full h-12 rounded-md"
          />

          <div className="flex gap-4">
            <Textbox
              type="date"
              name="startDate"
              label="Start Date"
              register={register("startDate", {
                required: "Start date is required",
              })}
              error={errors.startDate?.message}
              className="w-full h-12 rounded-md"
            />
            <Textbox
              type="date"
              name="endDate"
              label="End Date"
              register={register("endDate")}
              error={errors.endDate?.message}
              className="w-full h-12 rounded-md"
            />
          </div>

          <Textbox
            placeholder="Enter project budget"
            name="budget"
            label="Budget"
            register={register("budget")}
            error={errors.budget?.message}
            className="w-full h-12 rounded-md"
          />

          <SelectList
            label="Priority Level"
            lists={PRIORITY_LEVELS}
            selected={priority}
            setSelected={setPriority}
            className="w-full h-12 rounded-md"
          />

          <UserList
            team={team}
            setTeam={setTeam}
            className="w-full h-12 rounded-md"
          />

          <div className="bg-white py-6 sm:flex sm:flex-row-reverse gap-4">
            <Button
              label="Submit"
              type="submit"
              gradientDuoTone="purpleToPink"
              className="px-8 text-sm font-semibold text-white sm:w-auto"
            />

            <Button
              type="button"
              gradientDuoTone="pinkToOrange"
              className="px-5 text-sm font-semibold text-gray-900 sm:w-auto"
              onClick={() => setOpen(false)}
              label="Cancel"
            />
          </div>
        </div>
      </form>
    </ModalWindow>
  );
};

export default AddProject;
