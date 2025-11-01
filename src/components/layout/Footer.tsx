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
      <motion.h3
        className="text-2xl font-semibold mb-6 text-[#d9c179]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume/CV
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cvData.map((cv, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1f262c] p-6 rounded-lg flex flex-col "
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-[#d9c179] mb-4">
              {cv.name}
            </h3>

            <motion.a
              href={cv.fileUrl}
              download={cv.name}
              className="bg-[#d9c179] text-black px-4 py-2 rounded text-center font-semibold hover:bg-[#b89a5e] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Download {cv.name}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Revel Cahyadi. All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
