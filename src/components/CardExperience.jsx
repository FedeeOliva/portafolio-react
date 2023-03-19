import React from "react";
import CardExperienceStyle from '../styles/CardExperience.module.css'
import logoTsoft from "../assets/LogoTsoft.png";

const CardExperience = ({experience}) => {
  return (
    <article className={CardExperienceStyle.card}>
      <div className={CardExperienceStyle.logo_container}>
      <img src={experience.logo} className={CardExperienceStyle.logo}/>

      </div>
      <div className={CardExperienceStyle.info}>
        <h4 className={CardExperienceStyle.job}>{experience.job}</h4>
        <span className={CardExperienceStyle.company}>{experience.company}</span>
        <span className={CardExperienceStyle.date}>{experience.date}</span>
        <p className={CardExperienceStyle.description}>
          {experience.description}
        </p>
      </div>
    </article>
  );
};

export default CardExperience;
