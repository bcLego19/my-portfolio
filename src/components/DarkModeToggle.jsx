import React from 'react'
import { useTheme } from '../context/ThemeContext'

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`dark-mode-toggle ${theme === 'dark' ? 'dark' : 'light'}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun and Moon SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-icon"
      >
        {/* Sun rays (visible in light mode) */}
        <circle className="sun" cx="12" cy="12" r="5" />
        <line className="sun" x1="12" y1="1" x2="12" y2="3" />
        <line className="sun" x1="12" y1="21" x2="12" y2="23" />
        <line className="sun" x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line className="sun" x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line className="sun" x1="1" y1="12" x2="3" y2="12" />
        <line className="sun" x1="21" y1="12" x2="23" y2="12" />
        <line className="sun" x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line className="sun" x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        
        {/* Moon crescent (visible in dark mode) */}
        <path className="moon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}

export default DarkModeToggle