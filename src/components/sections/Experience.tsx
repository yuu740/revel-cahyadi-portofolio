import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "../../constants/experience";

const Experience: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="experience"
      className="py-20 bg-[#1f262c]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-[#2a323a] transform -translate-x-1/2"></div>
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-5/12"></div>
              <div className="z-10 bg-[#d9c179] w-4 h-4 rounded-full"></div>
              <div className="w-5/12 bg-[#2a323a] p-6 rounded-lg shadow-lg">
                <p className="text-sm text-[#d9c179] mb-1">{item.period}</p>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-md text-gray-400 mb-2">{item.institution}</p>
                <ul className="text-gray-300 list-disc list-inside">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
