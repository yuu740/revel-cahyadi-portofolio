import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../../constants/about";

const InfoItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <motion.div
    className="mb-2"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="font-semibold text-white">{label}: </span>
    <span className="text-gray-300">{value}</span>
  </motion.div>
);

const About: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
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
          About Me
        </motion.h2>
        <div className="bg-[#2a323a]/50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#d9c179] mb-4">
              Personal Info
            </h3>
            {ABOUT_DATA.personalInfo.map((item) => (
              <InfoItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#d9c179] mb-4">Contact</h3>
            {ABOUT_DATA.contactInfo.map((item) => (
              <InfoItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
            <h3 className="text-xl font-bold text-[#d9c179] mt-6 mb-4">
              Social Links
            </h3>
            <div className="flex space-x-4">
              {ABOUT_DATA.socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#d9c179] transition"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
