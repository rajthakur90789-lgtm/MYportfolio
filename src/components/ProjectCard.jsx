import React from 'react'

const ProjectCard = ({
  title,
  description,
  image,
  technologies
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Project Content */}
      <div className="p-4">

        {/* Title */}
        <h3 className="text-xl font-bold mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">

          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            View Project
          </a>

          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
          >
            Source Code
          </a>

        </div>

      </div>
    </div>
  )
}

export default ProjectCard