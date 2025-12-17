import React from 'react'

const About = ({ summary, skills }) => {
	return (
		<section id="about" className="about">
			<h2>About Me</h2>
			<p className="summary">{summary}</p>

			<h3>Technical Skills</h3>
			<div className="skills-container">
				{/* Array.map() - Iterate over skills array */}
				{skills.map((skillGroup) => (
					// 'key' prop required for React's Dom reconciliation
					<div key={skillGroup.category} className="skill-group">
						<h4>{skillGroup.category}</h4>
						<ul>
							{/* Nested map - iterate over items array */}
							{skillGroup.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default About