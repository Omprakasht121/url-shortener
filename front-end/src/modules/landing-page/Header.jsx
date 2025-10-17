import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const signup = () => navigate("/register");

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="font-sans px-6 py-4"
    >
      <nav className="h-12 md:h-16 px-4 md:px-12 flex justify-between items-center text-white font-semibold max-w-7xl mx-auto rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white/20 shadow-md shadow-green-400/30">
        {/* Logo */} 
        <div className="hover:text-green-400 cursor-pointer transition-all duration-300">
          <h1 className="text-lg md:text-2xl font-bold leading-tight">URL</h1>
          <p className="text-sm font-light -mt-1">Shortener</p>
        </div>

        {/* Navigation links */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-green-400 transition-colors">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-green-400 transition-colors">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-green-400 transition-colors">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Sign Up button */}
        <button
          onClick={signup}
          className="border border-white px-4 py-1  rounded-md hover:bg-green-500 hover:text-black transition-all duration-300"
        >
          Sign Up
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
