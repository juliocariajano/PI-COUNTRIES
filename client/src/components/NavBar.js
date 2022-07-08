import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "../Style/StyledNavBar";
import OnSearchName from "../components/OnSearchName"



export default function NavBar() {
    return (
      <StyledNav>
        

        <Link to='/home'>
        <img
          src="https://www.megaidea.net/wp-content/uploads/2022/01/Cleo-y-Cuquin-26.png"
          alt="Countries"
        />
        </Link>
        
        {/* {<div className="countrydiv">
        <img className="countries"
          // src="htts://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
        />
        </div>} */}
        <hr/>
        <OnSearchName />
      </StyledNav>
    );
  }