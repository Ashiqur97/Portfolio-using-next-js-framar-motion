import React from 'react'
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

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
              <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
              <ul className='text-seconadary space-y-2'>
                <li>React/Next.js</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>HTML5/CSS</li>
              </ul>
            </div>

             <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className='text-xl font-semibold mb-2'>Backend</h3>
              <ul className='text-seconadary space-y-2'>
                <li>Solidity</li>
                <li>Hardhat</li>
                <li>Etherjs</li>
              </ul>
            </div>

              <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className='text-xl font-semibold mb-2'>Backend</h3>
              <ul className='text-seconadary space-y-2'>
                <li>Git/GitHub</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
      </section>

      <section className='mb-16'>
          <h2 className='section-title'>Expriences</h2>

          <div className='max-w-3xl mx-auto space-y-8'>
            <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2'>Junior Developer</h3>
                <p className='text-primary mb-2'>Company Name 2024</p>
                <ul className='text-secondary space-y-2 list-disc list-inside'>
                  <li>Multiple Web Application using asp.net core/MVC and SQL Server</li>
                </ul>
            </div>
          </div>
      </section>

      <section className='mb-16'>
          <h2 className='section-title'>Academic Qualification</h2>

          <div className='max-w-3xl mx-auto space-y-8'>
            <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2'>B.Sc in Software Engineering</h3>
                <p className='text-primary mb-2'>Daffodil International University 2019-2013</p>
                <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.
            </p>
            </div>
          </div>
      </section>
      
    </div>
  )
}

export default About;
