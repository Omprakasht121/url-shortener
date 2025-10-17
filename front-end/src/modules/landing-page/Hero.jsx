import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/register");

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center text-center font-sans bg-gradient-to-b from-black/80 to-green-900/30 px-6"
    >
      <div className="max-w-4xl">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        >
          Welcome to <span className="text-white">URL Shortener</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-yellow-300 text-lg sm:text-xl"
        >
          Shorten your long URLs in one click — fast, simple & secure.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
          <button
            onClick={handleGetStarted}
            className="bg-green-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-white transition-all duration-300 shadow-md shadow-green-500/30"
          >
            Get Started
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
