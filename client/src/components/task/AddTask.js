import React from "react";
import ModalWindow from "../ModalWindow";
import { DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Textbox from "../Textbox";
import UserList from "./UserList";
import SelectList from "../SelectList";
import Button from "../Button";
import { BiImages } from "react-icons/bi";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

const uploadedFileURLs = [];

const AddTask = ({ open, setOpen, className }) => {
  const task = "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [team, setTeam] = useState(task?.team || []);
  const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
  const [priority, setPriority] = useState(
    task?.priority?.toUpperCase() || PRIORIRY[2]
  );
  const [assets, setAssets] = useState([]);
  const [uploading, setUploading] = useState(false);

  const submitHandler = () => {};

  const handleSelect = (e) => {
    setAssets(e.target.files);
  };

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="p-1 max-w-lg mx-auto mb-1 mr-4"
        >
          <DialogTitle
            as="h3"
            className="text-lg font-bold leading-6 text-gray-900 mb-7"
          >
            {task ? "UPDATE TASK" : "ADD TASK"}
          </DialogTitle>

          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Task Title"
              type="text"
              name="title"
              label="Task Title"
              // className="w-full rounded"
              className="w-full h-12 rounded-md"
              register={register("title", { required: "Title is required" })}
              error={errors.title ? errors.title.message : ""}
            />

            <UserList
              setTeam={setTeam}
              team={team}
              className="w-full h-12 rounded-md"
            />

            <div className="flex items-center gap-5">
              <div className="w-1/2">
                <SelectList
                  label="Task Stage"
                  lists={LISTS}
                  selected={stage}
                  setSelected={setStage}
                  className="w-full h-12 rounded-md"
                />
              </div>

              <div className="w-1/2">
                <Textbox
                  placeholder="Date"
                  type="date"
                  name="date"
                  label="Task Date"
                  // className="w-full rounded h-full"
                  register={register("date", {
                    required: "Date is required!",
                  })}
                  error={errors.date ? errors.date.message : ""}
                  className="w-full h-12 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <SelectList
                label="Priority Level"
                lists={PRIORIRY}
                selected={priority}
                setSelected={setPriority}
                className="w-full h-12 rounded-md"
              />

              <div className="w-full flex items-center justify-center mt-4">
                <label
                  className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4"
                  htmlFor="imgUpload"
                >
                  <input
                    type="file"
                    className="hidden"
                    id="imgUpload"
                    onChange={(e) => handleSelect(e)}
                    accept=".jpg, .png, .jpeg"
                    multiple={true}
                  />
                  <BiImages />
                  <span>Add Assets</span>
                </label>
              </div>
            </div>

            <div className="bg-white py-6 sm:flex sm:flex-row-reverse gap-4">
              {uploading ? (
                <span className="text-sm py-2 text-red-500">
                  Uploading assets
                </span>
              ) : (
                <Button
                  label="SUBMIT"
                  type="submit"
                  gradientDuoTone="purpleToPink"
                  className="px-8 text-sm font-semibold text-white sm:w-auto"
                />
              )}

              <Button
                type="button"
                gradientDuoTone="pinkToOrange"
                className="px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
                label="CANCEL"
              />
            </div>
          </div>
        </form>
      </ModalWindow>
    </>
  );
};

export default AddTask;
