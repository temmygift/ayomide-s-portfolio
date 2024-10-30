import React from 'react';
import ayo from '../component/ayo.jpg'; // Ensure the path is correct
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-5">
      {/* Image Section */}
      <motion.div
        className="flex items-center justify-center md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ayo}
          alt="Oke Ayomide"
          className="w-3/5 h-1/2 rounded-lg mb-4 object-cover shadow-lg transform hover:scale-110 transition duration-300"
        />
      </motion.div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Oke Ayomide
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          UI/UX Designer & Creative Thinker
        </motion.p>
        <motion.p
          className="text-lg text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I’m passionate about creating intuitive and user-friendly designs that enhance the overall user experience. With a background in both design and technology, I strive to bridge the gap between form and function.
        </motion.p>
        <motion.a
          href="#about"
          className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default Home;

