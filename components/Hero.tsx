import Image from 'next/image'
import React from 'react'
import Buttongroups from './Buttongroup'
import Githubgraph from './Githubgraph'

const Hero = () => {
  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-0 py-6 sm:py-8 md:py-12 lg:py-0 flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8
">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-2">
          Sameer Saifi
        </h1>
        <p className="text-zinc-500 uppercase tracking-widest text-xs sm:text-sm">
          Software Developer
        </p>
        <p className="text-zinc-300 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed sm:leading-loose">
          Hi, I&apos;m Sameer, a passionate Software Developer with a keen interest in creating efficient and innovative solutions. I specialize in web development and enjoy working with modern technologies to build user-friendly applications. When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or creating graphics.
        </p>

        <div className="mt-5 sm:mt-6">
          <Buttongroups />
        </div>

        <div className="mt-5 sm:mt-6">
          <Githubgraph />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-4">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-300">
  <Image
    className="rounded-2xl object-cover w-full h-full"
    width={448}
    height={448}
    src="/profile.jpg"
    alt="my-photo"
  />
</div>


        <div className="bg-zinc-300 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-lg text-center">
          <h2 className="text-xs sm:text-sm font-medium">
            Currently working on my DevOps Skills
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
