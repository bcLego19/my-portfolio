import React from 'react'

const Navigation = () => {
	const handleSmoothScroll = (event, targetId) => {
		event.preventDefault()

		const targetElement = document.getElementById(targetId)

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}

	return (
		<nav className="navigation">
			<ul className="nav-list">
				{/* Each link has an onClick handler */}
				<li>
					<a
						href="#about"
						onClick={(event) => handleSmoothScroll(event, 'about')}
						className="nav-link"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#about"
						onClick={(event) => handleSmoothScroll(event, 'projects')}
						className="nav-link"
					>
						Projects
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation