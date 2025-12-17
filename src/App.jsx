import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
// Import all components
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import BackToTop from './components/BackToTop'

// Import data
import {portfolioData} from './data/portfolioData'

const App = () => {
  // Destructure data for cleaner code
  const { personal, summary, skills, projects } = portfolioData

  return (
    <>
      <div className="app">
        {/* Pass data as props to each component */}
        <Header personal={personal} />
        <main>
          <About summary={summary} skills={skills} />
          <Projects projects={projects} />
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 {personal.name}. Built with React + Vite.</p>
        </footer>

        {/* BackToTop component */}
        <BackToTop />
      </div>
    </>
  )
}

export default App
