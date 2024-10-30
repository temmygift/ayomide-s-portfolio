import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Oke Ayomide
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-4 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Oke Ayomide is a dedicated UI/UX designer who  finished school in 2023. With over a year of hands-on 
        experience, he has been actively working while continuously learning and honing his design skills.
      </motion.p>
      <motion.p
        className="text-lg text-gray-700 mb-4 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Throughout his journey, Oke has embraced opportunities to work on various projects, where he has developed 
        a strong understanding of user-centered design principles. His ability to blend creativity with practical 
        solutions sets him apart in the design field.
      </motion.p>
      <motion.h3
        className="text-2xl font-semibold text-gray-800 mt-8 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Key Achievements:
      </motion.h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Contributed to projects that enhanced user experience and satisfaction.</li>
        <li>Gained valuable skills through consistency and self learnig .</li>
      </ul>
      <motion.p
        className="text-lg text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Oke is excited to continue his journey in the design world, seeking new opportunities to apply his skills 
        and contribute to innovative projects.
      </motion.p>
    </section>
  );
};

export default About;
