import React from "react";
import { useRegister } from "../hooks/register-hook.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Register = () => {
  const { doSubmit, register, handleSubmit, errors, reset } = useRegister();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      {/* Animated Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-2xl shadow-lg shadow-blue-400/40 border border-white/20 p-6 sm:p-10"
      >
        <form onSubmit={handleSubmit(doSubmit)} className="text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl font-bold mb-6 text-black"
          >
            Create Account
          </motion.h1>

          <div className="flex flex-col gap-6 text-base sm:text-lg text-black">
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-medium block mb-1">
                Name:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("name")}
                type="text"
                placeholder="Enter Name"
                id="name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-medium block mb-1">
                Email:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              <label htmlFor="pass" className="font-medium block mb-1">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("password")}
                type="password"
                placeholder="Password"
                id="pass"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 font-medium">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-2 bg-cyan-500 text-white rounded-md border border-black hover:bg-white hover:text-black transition-all duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="w-full sm:w-auto px-8 py-2 border border-black rounded-md hover:bg-white hover:text-black transition-all duration-300"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 text-blue-500 text-lg mt-6"
      >
        <p className="text-white">Already a user?</p>
        <Link
          to="/login"
          className="font-semibold underline decoration-2 hover:text-red-400 transition-colors"
        >
          Login
        </Link>
      </motion.div>
      </motion.div>

      {/* Bottom Link */}
      
    </div>
  );
};
