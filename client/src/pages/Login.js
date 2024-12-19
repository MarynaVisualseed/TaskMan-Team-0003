import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";
import { user as mockUser } from "../assets/data"; 
import OAuth from "../components/OAuth";

export default function Login() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" }); 
  const navigate = useNavigate();

  const [isCheckingCredentials, setIsCheckingCredentials] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/project");
    }
  }, [user, navigate]);

  const submitHandler = async (data) => {
    setIsCheckingCredentials(true);

    // Check if email exists in mock user data
    if (data.email !== mockUser.email) {
      setError("email", { type: "manual", message: "Email not found" });
      setIsCheckingCredentials(false);
      return;
    }

    // Check if the password matches the mock user data
    if (data.password !== mockUser.password) {
      setError("password", { type: "manual", message: "Incorrect password" });
      setIsCheckingCredentials(false);
      return;
    }

    // Simulated login (replace this with real API call)
    const fakeUser = { username: mockUser.name, token: "fake-jwt-token" };
    dispatch(setCredentials(fakeUser));
    console.log("User authenticated:", fakeUser);
    setIsCheckingCredentials(false);
    navigate("/projects"); 
  };

  const handleGoogleLogin = () => {
    console.log("Google login triggered!");
    // Implement Google login functionality here.
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-slate-100">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-lg text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Connect every team, task, and project together with TaskMan App!
              </span>
            </span>
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

        {/* Right Side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-7 bg-white px-10 pt-14 pb-14"
          >
            <div>
              <p className="text-blue-700 text-3xl font-bold text-center">
                Welcome back!
              </p>
              <p className="text-center text-base text-gray-800">
                Keep your credentials safe
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              {/* Email Field */}
              <Textbox
                placeholder="Your email"
                type="email"
                name="email"
                label="Email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address format",
                  },
                })}
                error={errors.email?.message}
                className="w-full rounded-md"
              />

              {/* Password Field */}
              <Textbox
                placeholder="Your password"
                type="password"
                name="password"
                label="Password"
                register={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password cannot exceed 30 characters",
                  },
                })}
                error={errors.password?.message}
                className="w-full rounded-md"
              />

              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                I forgot my password.
              </span>

              <Button
                gradientDuoTone="purpleToBlue"
                type="submit"
                disabled={!isValid || isCheckingCredentials}
                style={{ textAlign: "center" }}
              >
                {isCheckingCredentials ? "Validating..." : "Login"}
              </Button>

              <div className="self-center">---- Or sign up with ----</div>

              <OAuth />

              <div className="flex gap-1 text-sm mt-3">
                <span>I don't have an account yet.</span>
                <Link to="/register" className="text-blue-800">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
