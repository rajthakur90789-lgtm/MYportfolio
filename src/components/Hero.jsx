import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/assets/Linkprofile.jpeg'

const Hero = () => {
  const text = "FULL STACK DEVELOPER"
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let index = 0

    const typing = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(typing)
      }
    }, 150)

    return () => clearInterval(typing)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="md:w-1/2 mb-10 md:mb-0">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Raj Solanki
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            {displayText}
            <span className="text-blue-500">|</span>
          </h2>

          <p className="text-lg text-gray-400 mb-8">
            I create stunning web experiences with modern technologies and innovative solutions.
          </p>

          <div className="flex space-x-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-600 text-white font-bold rounded-full transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Gradient Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></div>

            {/* Profile Image */}
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
              src={profileImage}
              alt="Raj Solanki"
            />

          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Hero