import React from 'react'
import teamIcon from '../assets/team.png'
import storyIcon from '../assets/story.png'
import missionIcon from '../assets/mission.png'

const About = () => {
  return (
    <section className="px-4 md:px-16 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">ABOUT US</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        At Lumnarie, we are dedicated to bridging the gap between innovative ideas and the expert talent required to bring them to fruition. Discover who we are, where we came from, and what drives us every day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 shadow-sm text-center">
          <img src={teamIcon} alt="Team" className="h-16 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Team Introduction</h3>
          <p className="text-sm text-gray-600">
            The team is comprised of expert innovators and problem-solvers at the forefront of the tech industry...
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-6 shadow-sm text-center">
          <img src={storyIcon} alt="Story" className="h-16 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Our Story</h3>
          <p className="text-sm text-gray-600">
            Our journey began with a singular focus: to simplify and elevate the process of digital innovation...
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-6 shadow-sm text-center">
          <img src={missionIcon} alt="Mission" className="h-16 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-gray-600">
            Lumnarie’s mission is to simplify and accelerate the path to technological success...
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
