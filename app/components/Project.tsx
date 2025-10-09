"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-gradient-to-br from-red-500/20 via-black to-black
                 rounded-2xl shadow-lg overflow-hidden border border-red-500/30
                 hover:shadow-red-500/40 transition-all duration-300
                 flex flex-col"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-red-400">{title}</h3>
        <p className="text-gray-300 mt-2 flex-grow">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm rounded-full bg-red-500/20 text-red-300 border border-red-500/40"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all"
            >
              <FaGithub /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
