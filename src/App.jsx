import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import favicon from '/favicon.svg'
import faviconIcon from '/favicon.ico'
import './App.css'

import React from 'react'
// Import all components
import ParticleTrail from './components/ParticleTrail'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import BackToTop from './components/BackToTop'
import DarkModeToggle from './components/DarkModeToggle'

// Import data
import {portfolioData} from './data/portfolioData'

const App = () => {
  // Destructure data for cleaner code
  const { personal, summary, skills, projects } = portfolioData

  return (
    <>
      <div className="app">
        <ParticleTrail />

        <Header personal={personal} />
        <main>
          <About summary={summary} skills={skills} />
          <Projects projects={projects} />
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© April 2026 {personal.name}. Built with React + Vite.</p>
          <p>Special thanks to Rahul Mishra on Unsplash</p>
        </footer>

        {/* BackToTop component */}
        <BackToTop />
        <DarkModeToggle />
      </div>
    </>
  )
}

export default App
