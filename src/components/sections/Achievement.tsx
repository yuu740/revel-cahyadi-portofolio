import React, { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATES_DATA } from "../../constants/certificate";
import type { Certificate } from "../../interfaces/certificate.interface";

const Achievement: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const isPDF = (fileUrl: string) => fileUrl.toLowerCase().endsWith(".pdf");
  const isImage = (fileUrl: string) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(fileUrl);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CERTIFICATES_DATA.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = CERTIFICATES_DATA.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <motion.section
      id="awards"
      className="py-20 bg-[#1f262c] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Awards & Certificates
        </motion.h2>

        {/* 🔹 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((cert: Certificate, index: number) => (
            <motion.div
              key={index}
              className="bg-[#2a323a] p-6 rounded-lg flex flex-col h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#d9c179] mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Issued by: {cert.issuer}
                </p>

                <div className="flex-1 mb-4 overflow-hidden rounded">
                  {isPDF(cert.fileUrl) ? (
                    <iframe
                      src={cert.fileUrl}
                      width="100%"
                      height="300px"
                      className="border-0"
                      title={`${cert.title} Preview`}
                    />
                  ) : isImage(cert.fileUrl) ? (
                    <img
                      src={cert.fileUrl}
                      alt={`${cert.title} Preview`}
                      className="w-full h-48 object-cover rounded"
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-image.png";
                      }}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded">
                      <p className="text-gray-400">Preview not available</p>
                    </div>
                  )}
                </div>
              </div>
              <motion.a
                href={cert.fileUrl}
                download={cert.title}
                className="bg-[#d9c179] text-black px-4 py-2 rounded text-center font-semibold hover:bg-[#b89a5e] transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Download Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-[#d9c179] text-black font-bold"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievement;
