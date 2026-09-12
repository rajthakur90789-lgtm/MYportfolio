import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    name: 'HTML',
    icon: '🌐',
    description: 'Building the structure of modern web pages.',
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Creating responsive and attractive web designs.',
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    description: 'Creating interactive and dynamic web applications.',
  },
  {
    name: 'React',
    icon: '⚛️',
    description: 'Building modern and reusable user interfaces.',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    description: 'Building backend applications and APIs.',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description: 'Managing and storing application data efficiently.',
  },
]

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Skills</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-200 rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >

              {/* Icon */}
              <div className="text-4xl mb-4">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400">
                {skill.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </motion.div>
  )
}

export default Skills