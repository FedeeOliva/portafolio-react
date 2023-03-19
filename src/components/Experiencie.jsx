import React from "react";
import CardExperience from "./CardExperience";
import {experiences} from "../data/experience";

const Experiencie = () => {
  return (
    <section className="servicios" id="experiencia">
      <h2 className="title-service">Experiencia Laboral</h2>
      <div className="container fadeIn">
        <div style={{
          display: "flex" ,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {experiences.map( (exp, idx) => 
          
          <CardExperience experience={exp} key={idx} />
            )}
        </div>
        
      </div>
    </section>
  );
};

export default Experiencie;
