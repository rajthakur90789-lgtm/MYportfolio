import React from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLightbulb
} from 'react-icons/fa'

import rajprofile from '../assets/assets/Linkprofile.jpeg'

const About = () => {

  const aboutInfo = [
    {
      title: 'Frontend Development',
      description:
        'Building modern and responsive user interfaces using React, HTML, CSS, and JavaScript.',
      icon: FaCode,
    },
    {
      title: 'Backend Development',
      description:
        'Creating secure and scalable backend applications using Node.js and Express.js.',
      icon: FaServer,
    },
    {
      title: 'Database',
      description:
        'Working with databases to store, manage, and retrieve application data efficiently.',
      icon: FaDatabase,
    },
    {
      title: 'Problem Solving',
      description:
        'Continuously improving my coding and problem-solving skills through practical projects.',
      icon: FaLightbulb,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple"> Me</span>
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">

            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={rajprofile}
              alt="profile"
            />

          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >

            <div className="rounded-2xl p-8">

              <h3 className="text-2xl font-semibold mb-6">
                My Journey
              </h3>

              <p className="text-gray-300 mb-6">
                I’m a passionate Full Stack Developer who enjoys building
                modern, responsive, and user-friendly web applications. I
                work with technologies like HTML, CSS, JavaScript, React,
                Node.js, Express.js, and databases to create complete web
                solutions. I’m always eager to learn new technologies,
                improve my problem-solving skills, and turn ideas into
                functional and engaging digital experiences. My goal is to
                build clean, efficient, and scalable applications while
                continuously growing as a developer.
              </p>

              <p className="text-gray-300 mb-12">
                I’m a dedicated Full Stack Developer with a strong interest
                in creating modern and responsive web applications. I enjoy
                transforming ideas into interactive digital experiences
                using modern web technologies. I focus on writing clean,
                maintainable code and building websites that are both
                visually appealing and easy to use. I’m continuously
                improving my technical skills and exploring new technologies
                to become a better developer and create impactful projects.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {aboutInfo.map((data, index) => {

                  const Icon = data.icon

                  return (
                    <div
                      key={index}
                      className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"
                    >

                      <div className="text-purple text-4xl mb-4">
                        <Icon />
                      </div>

                      <h4 className="text-xl font-semibold mb-3">
                        {data.title}
                      </h4>

                      <p className="text-gray-300">
                        {data.description}
                      </p>

                    </div>
                  )

                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>
  )
}

export default About