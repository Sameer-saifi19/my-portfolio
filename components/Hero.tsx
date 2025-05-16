
import Image from 'next/image'
import React from 'react'
import Buttongroups from './Buttongroup'
import Githubgraph from './Githubgraph'

const Hero = () => {
  return (
    <>

          <div className="flex justify-between items-center w-full">

          <div className="w-1/2">
            <h1 className="font-bold text-3xl md:text-5xl tracking-wide mb-2 text-white">
              Sameer Saifi
            </h1>
            <p className="text-zinc-500 uppercase tracking-widest">
              Software Developer
            </p>
            <p className="text-zinc-300 mt-6">
              Hi, I&apos;m Sameer, a passionate Software Developer with a keen
              interest in creating efficient and innovative solutions. I
              specialize in web development and enjoy working with modern
              technologies to build user-friendly applications. When I&apos;m
              not coding, you can find me exploring new technologies,
              contributing to open-source projects, or creating graphics.
            </p>
            <Buttongroups/>
            <Githubgraph/>
          </div>
          <div className="w-1/2 flex justify-end items-start">
            <Image
              className='rounded-4xl'
              width={400}
              height={400}
              src="/profile.jpg"
              alt="my-photo"
            ></Image>

          </div>

        </div>
    </>
  )
}

export default Hero