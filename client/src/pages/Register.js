import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";

export default function Register() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/project");
    }
  }, [user, navigate]);

  const submitHandler = async (data) => {
    const fakeUser = {
      username: data.username,
      email: data.email,
      token: "fake-jwt-token",
    };
    dispatch(setCredentials(fakeUser));
    console.log("User registered:", fakeUser);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-slate-100">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-lg text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-600 rounded-md group-hover:bg-opacity-0">
                Join TaskMan App and manage your tasks efficiently!
              </span>
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-800"></p>
            <div className="flex-1">
              <div className="font-bold dark:text-white text-7xl">
                <span className="px-2 py-1 bg-gradient-to-tr from-indigo-800 via-purple-400 to-pink-400 rounded-md text-white">
                  TaskMan
                </span>
                <span className="text-gray-500">App</span>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-7 bg-white px-10 pt-14 pb-14 "
          >
            <div className="">
              <p className="text-blue-700 text-3xl font-bold text-center">
                Welcome!
              </p>

              <p className=" text-center text-base text-gray-800">
                Create a secure password to protect your account
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="Your username"
                type="text"
                label="Username"
                name="username"
                className="w-full rounded-s-md"
                register={register("username", {
                  required: "Username is required",
                })}
                error={errors.username ? errors.username.message : ""}
              />
              <Textbox
                placeholder="Your email"
                type="email"
                name="email"
                label="Email"
                className="w-full rounded-s-md"
                register={register("email", {
                  required: "Email is required",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="Your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-s-md"
                register={register("password", {
                  required: "Password is required",
                })}
                error={errors.password ? errors.password.message : ""}
              />
              <Textbox
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                className="w-full rounded-s-md"
                register={register("confirmPassword", {
                  required: "Confirm Password  is required",
                })}
                error={
                  errors.confirmPassword ? errors.confirmPassword.message : ""
                }
              />

              <Button gradientDuoTone="purpleToBlue" type="submit">
                Register
              </Button>

              <div className="flex gap-1 text-sm mt-3">
                <span>Already have an account? </span>
                <Link to="/login" className="text-blue-800">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
