import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
		<div className="container">
			<small>
			 	Federico Oliva - Fullstack Developer.
			</small>
			<div className="redes">
				<a href="https://www.linkedin.com/in/fedeoliva/" target="_blank"
				rel="noopener noreferrer"
				>					
				<i className="fab fa-linkedin"></i>
				</a>

				<a href="https://github.com/FedeeOliva" target="_blank"
				rel="noopener noreferrer"
				>					
				<i className="fab fa-github-square"></i>
				</a>
			</div>
		</div>
	</footer>
  )
}

export default Footer