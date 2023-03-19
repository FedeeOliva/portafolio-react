import React, {useState, useEffect} from 'react'
import Logo from "../assets/Logo.svg";

const Navbar = () => {

	const [isActive, setIsActive] = useState(false);
	const toggleNavbar = () => {
		setIsActive( isActive => !isActive)
	}

	useEffect(() => {
		let lastScrollPos = window.scrollY;

		const handleScroll = () => {
			if(!navbar.classList.contains('navbar-active')){
				if(window.scrollY > lastScrollPos){
					navMain.style.top = '-60px';
				}else{
					navMain.style.top = '0';
				}
				lastScrollPos = window.scrollY;
			}
		}
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	},[])
  return (
    <nav className="nav" id="navMain">
		<div className="navbar">
			<div className="navbar-brand">
				<a href="#header">
					<img src={Logo} alt="Federico Oliva - Desarrollador Web"/>
				</a>
				<button className="navbar-bars" id="showNavbar" onClick={toggleNavbar}>
					<i className={`fas ${isActive? 'fa-times' : 'fa-bars'}`}></i>
				</button>					
			</div>
			<div className={`navbar-collapse ${isActive ? ('navbar-active') : ''}`} id="navbar">
				<div className="navbar-left">					
					<a href="#experiencia" className="navbar-link" onClick={toggleNavbar}>Experiencia</a>
					<a href="#servicios" className="navbar-link" onClick={toggleNavbar}>Tecnologías</a>
					<a href="#proyectos" className="navbar-link" onClick={toggleNavbar}>Proyectos</a>
					<a href="#sobremi" className="navbar-link" onClick={toggleNavbar}>Sobre mi</a>
					<a href="./assets/pdf/cv-federico-oliva.pdf" target="_blank" className="navbar-link visibleTablet" download="CV-Federico-Oliva.pdf">Descargar CV</a>	
				</div>
				<div className="navbar-right">
					<div className="navbar-redes">
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
					<a href="federico__oliva__cv.pdf" target="_blank" className="btn-primary" id="btnCV" download="CV-Federico-Oliva.pdf">
						Descargar CV
					</a>			
				</div>
			</div>
		</div>
	</nav>	
  )
}

export default Navbar