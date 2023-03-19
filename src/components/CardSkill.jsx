import React from "react";

const CardSkill = ({ name, logo }) => {
  return (
    <article className="card-service">
      <i className={logo}></i>
      <h4>{name}</h4>
      <p> </p>
    </article>
  );
};

export default CardSkill;
