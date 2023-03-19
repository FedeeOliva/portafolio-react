import React, {useState, useEffect} from 'react'
import vector from '../assets/Vector1.svg'

const About = () => {

	const [{descripcion, imgperfil}, setData] = useState({
		descripcion: "",
		imgperfil: ""
	});

	const fetchData = async () => {
		const abortController = new AbortController();
		try{
			const data = await fetch("https://simplejsoncms.com/api/dkiosl43qqp");
			const datajson = await data.json();
			console.log(datajson);
		}catch(e){
			console.log(e);
		}
		
	}

	useEffect( () => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		const fetchData = async () => {			
			try{
				const data = await fetch("https://simplejsoncms.com/api/dkiosl43qqp", {signal});
				const {sobremi} = await data.json();
				setData({
					descripcion: sobremi.descripcion,
					imgperfil: sobremi.img
				})
			}catch(e){
				console.log(e);
			}
			
		}
		fetchData();

		return () => {
			abortController.abort();
		}
	  
	}, []);

  return (
    <section className="sobremi" id="sobremi">
			<h2 className="sobremi-title">¿Quien soy?</h2>
			<div className="container">
				<img className="sobremi-avatar" src={imgperfil} alt="Federico Oliva"/>
				<div className="sobremi-text">
					<p>
						{descripcion}
                    </p>
				</div>
			</div>	
			<img src={vector} className="vector"/>
		</section>
  )
}

export default About