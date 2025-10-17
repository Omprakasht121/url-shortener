import React from "react";
import { useLogin } from "../hooks/login-hook.js";
import { motion } from "framer-motion";

export const Login = () => {
  const { doSubmit, register, handleSubmit, errors } = useLogin();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}login.jpg)`,
      }}
    >
      {/* Animated container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl flex justify-center items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-white/20 shadow-xl shadow-indigo-500/40"
      >
        <form
          onSubmit={handleSubmit(doSubmit)}
          className="w-full px-6 py-10 sm:px-10 sm:py-12 font-sans text-white"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-6 text-lg sm:text-xl text-amber-100 drop-shadow-lg bg-opacity-10 border border-gray-600 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.45)] ring-1 ring-indigo-400/20 hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] transition-shadow duration-300 p-8 sm:p-10"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-2">Login</h1>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("email")}
                type="text"
                placeholder="Enter Email"
                id="email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="pass" className="block mb-1">
                Password:
              </label>
              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                id="pass"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-4">
              <button
                className="w-full py-2 bg-blue-500 border border-black rounded-xl text-white hover:bg-white hover:text-black transition-all duration-300"
                type="submit"
              >
                Login
              </button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};
