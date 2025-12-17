import React from 'react'

const Projects = ({ projects }) => {
	return(
		<section id="projects" className="projects">
			<h2>Featured Projects</h2>
			<div className="projects-grid">
				{projects.map((project) => (
					// each project is a card
					<article key={project.id} className="project-card">
						<h3>{project.title}</h3>
						<p className="project-description">{project.description}</p>

						{/* Technologies used */}
						<div className="tech-tags">
							{project.technologies.map((tech) => (
								<span key={tech} className="tech-tag">
									{tech}
								</span>
							))}
						</div>

						{/* Highlights List */}
						<ul className="project-highlights">
							{project.highlights.map((highlight, index) => (
								// using index as key when no unique id exists
								<li key={index}>{highlight}</li>
							))}
						</ul>

						{/* Action buttons */}
						<div className="project-links">
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary"
							>
								View Code
							</a>
							{/* Conditional rendering - only show if liveDemo exists */}
							{project.liveDemo && (
								<a
									href={project.liveDemo}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary"
								>
									Live Demo
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Projects