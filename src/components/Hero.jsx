import React from 'react'
import devImage from '../assets/hero.svg'
import facebookIcon from '../assets/facebook.png'
import youtubeIcon from '../assets/youtube.png'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-[40px] md:px-[80px] py-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Find the right developer<br /> for your project
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          We deliver powerful technological solutions, connecting you with the skilled professionals
          who can turn your ideas into impactful realities.
        </p>
        <button className="bg-[#0D80F2] hover:bg-blue-700 text-white px-6 py-2 rounded transition cursor-pointer ">
          Get started
        </button>

        <div>
          <p className="text-sm text-gray-500 mt-6">Follow and Subscribe to our socials</p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow on Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="h-8 w-8 hover:scale-110 transition" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Subscribe on YouTube"
            >
              <img src={youtubeIcon} alt="YouTube" className="h-8 w-8 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={devImage} alt="Developer Graphic" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  )
}

export default Hero
