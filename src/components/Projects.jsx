import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

import hotelImage from '../assets/image.png'
import ngoImage from '../assets/ngo.jpg'
import fakeNewsImage from '../assets/fake.jpg'
import ticTacToeImage from '../assets/tic tak.jpg'
import portfolioImage from '../assets/assets/images (5).jpg'
import todoImage from '../assets/assets/images (6).jpg'

const projects = [
  {
    title: 'Hotel Template Website',
    description:
      'A modern and responsive hotel template website designed with an attractive layout and user-friendly interface.',
    image: hotelImage,
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI']
  },

  {
    title: 'NGO Charity Website',
    description:
      'A responsive NGO charity website designed to showcase campaigns, donations, and social impact using a modern design.',
    image: ngoImage,
    technologies: ['React', 'JavaScript', 'AI', 'Tailwind CSS']
  },

  {
    title: 'Fake News Detection System',
    description:
      'A Python-based machine learning system that detects whether a given news article is real or fake using NLP techniques.',
    image: fakeNewsImage,
    technologies: ['Python', 'Machine Learning', 'NLP', 'Flask']
  },

  {
    title: 'Tic Tac Toe Game',
    description:
      'An interactive Tic Tac Toe game developed using JavaScript with a simple and user-friendly interface.',
    image: ticTacToeImage,
    technologies: ['HTML', 'CSS', 'JavaScript']
  },

  {
    title: 'Personal Portfolio',
    description:
      'A modern personal portfolio website built with React to showcase my skills, projects, and developer journey.',
    image: portfolioImage,
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion']
  },

  {
    title: 'To-Do List Application',
    description:
      'A full-stack To-Do List application built with React and Node.js for creating, managing, updating, and deleting tasks.',
    image: todoImage,
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB']
  }
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        My
        <span className="text-blue-500"> Projects</span>
      </h2>

      <p className="text-center mb-8">
        A selection of my recent work, showcasing my skills and experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 font-bold"
        >
          <span>View All Projects</span>
          <FaArrowRight />
        </a>
      </div>
    </motion.div>
  )
}

export default Projects