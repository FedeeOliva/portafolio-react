import React, {useState, useEffect} from 'react'
import vector from '../assets/Vector1.svg'
import { resume } from '../data/resume'

const About = () => {
	

  return (
    <section className="sobremi" id="sobremi">
			<h2 className="sobremi-title">¿Quien soy?</h2>
			<div className="container">
				<img className="sobremi-avatar" src={resume.imgProfile} alt="Federico Oliva"/>
				<div className="sobremi-text">
					<p>
						{resume.data}
                    </p>
				</div>
			</div>	
			<img src={vector} className="vector"/>
		</section>
  )
}

export default About