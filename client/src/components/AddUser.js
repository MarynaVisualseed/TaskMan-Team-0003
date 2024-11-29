import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalWindow from "./ModalWindow";
import { DialogTitle } from "@headlessui/react";
import Textbox from "./Textbox";
import Button from "./Button";
import Loader from "./Loader";

const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);

  const isLoading = false,
    isUpdating = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnSubmit = () => {};

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen}>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="p-1 max-w-lg mx-auto mr-4"
        >
          <DialogTitle
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-5"
          >
            {userData ? "UPDATE PROFILE" : "ADD USER"}
          </DialogTitle>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Full name"
              type="text"
              name="name"
              label="Full Name"
              className="w-full rounded"
              register={register("name", {
                required: "Full name is required!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder="Title"
              type="text"
              name="title"
              label="Title"
              className="w-full rounded"
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder="Email Address"
              type="email"
              name="email"
              label="Email Address"
              className="w-full rounded"
              register={register("email", {
                required: "Email Address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />

            <Textbox
              placeholder="Role"
              type="text"
              name="role"
              label="Role"
              className="w-full rounded"
              register={register("role", {
                required: "User role is required!",
              })}
              error={errors.role ? errors.role.message : ""}
            />
          </div>

          {isLoading || isUpdating ? (
            <div className="py-5">
              <Loader />
            </div>
          ) : (
            <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                label="Submit"
                className="flex items-center justify-center"
              >
                SUBMIT
              </Button>

              <Button
                gradientDuoTone="pinkToOrange"
                type="submit"
                label="Cancel"
                className="flex items-center justify-center mr-4"
                onClick={() => setOpen(false)}
              >
                CANCEL
              </Button>
            </div>
          )}
        </form>
      </ModalWindow>
    </>
  );
};

export default AddUser;
