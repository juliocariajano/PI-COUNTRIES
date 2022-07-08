import React from "react";
import { detailCountry, setDetailCountry } from "../actions/index";
import { Link } from "react-router-dom";
import StyledCard, { StyledLink } from '../Style/StyleCard';


export default function Card({ id, imagen, name, continent, cca3 }) {
  return (
    <StyledCard>

    <div className="name">
    <StyledLink to={`/home/${cca3}`}>
          <h1 >{name} </h1>
        </StyledLink>
    </div>
    <div className="divIMG">
    <img className="mainIMG" src={imagen} alt="img not found" />
    </div>  
         
      <h4 >{continent}</h4>
    
    </StyledCard>
  );
}
