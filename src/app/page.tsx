import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Newsletter from './components/Newsletter'

const page = () => {
  return (
    <main>
      <Hero/>
      <Projects />
      <Blogs />
      <Newsletter />
    </main>
  )
}

export default page
