import React from "react";

const CardSkill = ({ name, logo = '', img = '' }) => {
  return (
    <article className="card-service">
      {logo ? 
        <i className={logo}></i>
        :
        <img src={img}/>
      }
      <h4>{name}</h4>
      <p> </p>
    </article>
  );
};

export default CardSkill;
