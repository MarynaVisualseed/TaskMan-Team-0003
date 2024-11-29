import { useForm } from "react-hook-form";

import { DialogTitle } from "@headlessui/react";
import Textbox from "../Textbox";
import Button from "../Button";
import ModalWindow from "../ModalWindow";

const AddDetails = ({ open, setOpen, id }) => {
  const details = "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {};

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <DialogTitle
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            ADD TASK DETAILS
          </DialogTitle>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Task details title"
              type="text"
              name="title"
              label="Title"
              className="w-full rounded"
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />

            <div className="flex items-center gap-4">
              <Textbox
                placeholder="Date"
                type="date"
                name="date"
                label="Task Date"
                className="w-full rounded"
                register={register("date", {
                  required: "Date is required!",
                })}
                error={errors.date ? errors.date.message : ""}
              />
              <Textbox
                placeholder="Tag"
                type="text"
                name="tag"
                label="Tag"
                className="w-full rounded"
                register={register("tag", {
                  required: "Tag is required!",
                })}
                error={errors.tag ? errors.tag.message : ""}
              />
            </div>
          </div>
          <div className="py-3 mt-4 flex sm:flex-row-reverse gap-4">
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="flex items-center justify-center"
              label="ADD DETAILS"
            />

            <Button
              gradientDuoTone="pinkToOrange"
              type="button"
              className="flex items-center justify-center"
              label="CANCEL"
              onClick={() => setOpen(false)}
            />
          </div>
        </form>
      </ModalWindow>
    </>
  );
};

export default AddDetails;
