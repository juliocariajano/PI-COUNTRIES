import styled from "styled-components";
import { Link } from "react-router-dom";
import allColors from './color'

const StyledCard = styled.div`
  border-style: solid;
  border-width: 1px;
  width: 250px;
  height: 300px;
  margin: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  background: linear-gradient(
    0deg,
    rgba(13, 184, 156, 0.7) 67%,
    rgba(21, 43, 98, 0.70) 100%
  );

  
  
  h4{
  margin-bottom: 0px;
  font-size: 20px;
  }

  .divIMG {
    //border: 5px solid black;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 130px;
    background-color: white;
    border-radius: 10%;
    .mainIMG {
      height: 130px;
      border-radius: 10%;

    }
  }

  &:hover {
    box-shadow: 2px 2px 3px 2px black;
  }

  .type {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    h3 {
      font-size: 18px;
    }

    div {
      margin-right: 15px;
      margin-left: 15px;
    }
    .typeIMG {
      width: 50px;
    }
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;

  color: white;
  &:hover{
    color: ${allColors.mainColor};};
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  };
 
`;


export default StyledCard;
