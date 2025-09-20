import React from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile/profile.jpg";

const Hero: React.FC = () => {
  const yourName = "Revel Cahyadi";

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#1f262c] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-[#d9c179] object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Hi, I'm <span className="text-6xl[#d9c179]">{yourName}</span>
        </h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am currently an active student majoring in Computer Science at Bina
          Nusantara University. I have a strong passion for learn more about
          Information Technology, such as programming. To know more about me,
          explore this website or find my contact information in the footer.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
