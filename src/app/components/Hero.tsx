'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
      <div className='max-w-3xl mx-auto text-center'>
          <div className='flex flex-col items-center mb-4'>
              <Image src="/profile-2.jpg" alt="Profile" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>Hi, I'm <span className='text-primary'>Ashiqur Rahman</span></h1>

          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>BlockChain Developer | Open Source Contributor</p>

          <div className='flex justify-center space-x-4 mb-8'>
            <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors'>
              <FaGithub />
            </Link>
          </div>
      </div>
    </section>
  )
}

export default Hero
