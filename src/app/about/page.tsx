import React from 'react'
import { FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      <section className='mb-16'>
          <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
               I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
          </p>
      </section>

      <section className='mb-16'>
          <h2 className='section-title'>Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
              <FaCode className="h-8 w-8 text-primary mb-4" />
            </div>
          </div>
      </section>
    </div>
  )
}

export default About;
