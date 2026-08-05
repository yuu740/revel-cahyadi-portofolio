import React from "react";
import { motion } from "framer-motion";
const Footer: React.FC = () => {

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
