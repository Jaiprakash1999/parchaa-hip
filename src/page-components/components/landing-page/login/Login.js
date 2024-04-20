import React, { useState } from "react";
import parchaaLogo from "../../../../images/parchaa.svg";

const Login = ({ setIsLogin = () => {}, setIsResetPassword = () => {} }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formadata");
  };

  const userDetails = {
    emailError: "",
    passwordError: "",
  };

  return (
    <div className="sm:w-8/12 w-full">
      <div className="flex mb-8">
        <img src={parchaaLogo} alt="parchaaLogo" />
        <span className="text-[#4B6AF5] flex items-end">Parchaa</span>
      </div>
      <div className="mt-8">
        <div className="text-[#111928] font-medium text-3xl">Welcome back</div>
        <div className="text-[#6B7280] font-normal text-base">
          Sign in with your email and password.
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="my-4">
          <label className="text-[#111928] text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className={
              userDetails.emailError !== ""
                ? "w-full text-sm font-normal text-[#C81E1E] p-2.5 bg-[#FDF2F2] border border-[#F05252] rounded-lg mt-1 focus:outline-none"
                : "w-full text-sm font-normal p-2.5 border rounded-lg mt-1 focus:outline-none focus:border-[#1A56DB]"
            }
          />
          {userDetails?.emailError !== "" && (
            <p className="text-[#E02424] font-normal text-sm">
              Username doesn't exist.
            </p>
          )}
        </div>
        <div className="my-4 flex flex-col">
          <label className="text-[#111928] text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            className={
              userDetails.passwordError !== ""
                ? "w-full text-sm font-normal text-[#C81E1E] p-2.5 bg-[#FDF2F2] border border-[#F05252] rounded-lg mt-1 focus:outline-none"
                : "w-full text-sm font-normal p-2.5 border rounded-lg mt-1 focus:outline-none focus:border-[#1A56DB]"
            }
          />
          {userDetails?.passwordError !== "" && (
            <p className="text-[#E02424] font-normal text-sm">
              Incorrect password
            </p>
          )}
        </div>
        <div className="flex justify-between item-center">
          <div className="flex item-center gap-1">
            <div>
              <input type="checkbox" />
            </div>
            <button className="text-[#6B7280] text-sm font-normal">
              Remember this device
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="hover:underline text-[#1A56DB] text-sm font-medium"
              type="button"
              onClick={() => {
                setIsLogin(false);
                setIsResetPassword(false);
              }}
              // onClick={forgotPassword}
              // disabled={isForgotPasswordLoading}
            >
              Forgot password?
              {/* {isForgotPasswordLoading ? "Loading..." : "Forgot password?"} */}
            </button>
          </div>
        </div>

        <button
          // disabled={isLoginAPILoading}
          type="submit"
          className="disabled:bg-gray-500 bg-[#1A56DB] text-sm text-white w-full rounded-lg p-2 my-4"
        >
          {/* {isLoginAPILoading ? "Loading..." : "Login"} */}
          Login to your account
        </button>
      </form>
    </div>
  );
};

export default Login;
