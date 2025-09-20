import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../../constants/projects";
import type { Project } from "../../interfaces/project.interface";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const visibleTags = (tags: string[], maxVisible: number = 4) =>
    tags.length > maxVisible ? tags.slice(0, maxVisible) : tags;

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.section
        id="projects"
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
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                className="bg-[#2a323a] rounded-lg overflow-hidden shadow-lg flex flex-col min-h-[420px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-image.png";
                  }}
                />

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.isContributor && (
                        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          Contributor
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {visibleTags(project.tags).map((tag) => (
                        <motion.span
                          key={tag}
                          className="text-xs bg-[#d9c179]/20 text-[#d9c179] px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tag}
                        </motion.span>
                      ))}

                      {project.tags.length > 4 && (
                        <motion.span
                          className="text-xs bg-[#d9c179]/20 text-[#d9c179] px-2 py-1 rounded-full cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => handleOpenModal(project)}
                        >
                          +{project.tags.length - 4} more...
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto space-x-3">
                    <motion.button
                      onClick={() => handleOpenModal(project)}
                      className="text-[#d9c179] hover:underline"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Details
                    </motion.button>
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d9c179] hover:underline"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      {project.repoUrl && (
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d9c179] hover:underline"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-[#2a323a] rounded-lg p-6 max-w-lg w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              {selectedProject.isContributor && (
                <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                  Contributor
                </span>
              )}
            </div>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#d9c179]/20 text-[#d9c179] px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <motion.button
                onClick={handleCloseModal}
                className="text-[#d9c179] hover:underline"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
