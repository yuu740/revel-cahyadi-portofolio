import React from "react";
import { motion } from "framer-motion";
import atsCV from "../../assets/documents/cv/ATS CV Revel Cahyadi.pdf";
import creativeCV from "../../assets/documents/cv/CV Revel Cahyadi.pdf";
const Footer: React.FC = () => {
  const cvData = [
    {
      name: "Professional CV",
      fileUrl: atsCV,
    },
    {
      name: "Creative CV",
      fileUrl: creativeCV,
    },
  ];

  return (
    <motion.footer
      className="bg-[#2a323a] text-center p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Revel Cahyadi. All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
