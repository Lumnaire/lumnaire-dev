import React from 'react'
import devImage from '../assets/hero.svg' // Replace with actual image

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-[80px] py-16">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Find the right developer<br /> for your project
        </h1>
        <p className="text-gray-600">
          We deliver powerful technological solutions, connecting you with the skilled professionals
          who can turn your ideas into impactful realities.
        </p>
        <button className="bg-[#0D80F2] text-white px-6 py-2 rounded">Get started</button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={devImage} alt="Developer Graphic" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  )
}

export default Hero
