import React from 'react'
import Navigation from './Navigation'

// Arrow function
const Header = ({ personal }) => {
	// Destructure personal object
	const { name, title, phone, email, github, linkedin } = personal

	return (
		<header id="header" className="header">
			{/* Main heading - semantic HTML */}
			<div>
				<h1 className="name">{name}</h1>
				<p className="title">{title}</p>
			</div>

			{/* Navigation Component */}
			<Navigation />

			{/* contact links - Array.map() for iteration */}
			<nav className="contact-links">
				<a href={`tel:${phone}`} className="contact-link">
					📞 {phone}
				</a>
				<a href={`mailto:${email}`} className="contact-link">
					✉️ {email}
				</a>
				<a href={github} target="_blank" rel="noopener noreferrer" className="contact-link">
					🔗 GitHub
				</a>
				<a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
					🔗 LinkedIn
				</a>
			</nav>
		</header>
	)
}

export default Header