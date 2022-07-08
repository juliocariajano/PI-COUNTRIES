import React from "react";
import { Link } from "react-router-dom";
import StyledDiv from "../Style/StyledLandingPage";

export default function LandingPage() {
  return (
    <StyledDiv>
    <div className="container">
      <h1 >Bienvenidos a Countries </h1>
      
      <img
          
          src="https://www.megaidea.net/wp-content/uploads/2022/01/Cleo-y-Cuquin-26.png"
          alt="Countries App"
        />
        </div>
        <Link to="/home">
          <button > Ir a Paises</button>
        </Link>
      </StyledDiv>
  );
}
