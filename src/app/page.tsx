import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blogs from './components/Blogs'

const page = () => {
  return (
    <main>
      <Hero/>
      <Projects />
      <Blogs />
    </main>
  )
}

export default page
