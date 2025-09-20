import React from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../constants/skills";

const Skills: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
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
          Skills
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {SKILLS_DATA.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              className="mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-[#d9c179] mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((item) => (
                  <motion.span
                    key={item.name}
                    className="group bg-gray-700 text-gray-200 px-4 py-2 rounded-md font-medium flex items-center gap-2 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#d9c179",
                      color: "#1f262c",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                    {item.framework && item.framework.length > 0 && (
                      <span className="text-xs bg-[#d9c179]/20 text-[#d9c179] px-2 py-1 rounded-full transition-colors duration-300 group-hover:bg-[#2a323a] group-hover:text-white">
                        {item.framework.join(", ")}
                      </span>
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
