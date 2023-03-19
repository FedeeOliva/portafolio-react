import React from "react";


const CardProject = ({project}) => {
    const {name, img, description,urlGithub, urlDemo } = project;
  return (
    <article className="card-proyecto">
      <img src={img} alt="proyecto 1" />
      <div className="card-proyecto-content">
        <h5>{name}</h5>
        <p>
          {description}
        </p>
        <div className="card-proyecto-link">
          <a
            href={urlDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={urlGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Código
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
