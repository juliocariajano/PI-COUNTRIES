import styled from "styled-components";
import allColors from "./color.js"; 

const StyledDiv = styled.div`
  background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-fresh-colorful-earth-advertising-background-backgroundfreshcolorearthhand-paintedsimplenaturalblue-background-image_78208.jpg);
  background-size: 100% 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: -webkit-sticky;
    margin-top: 0rem;
    margin-left: 40rem;

  

    h1 {
      color: yellow;
      right:600px;
      margin-bottom: 50px;
      font-size: 40px;
    }

    img {
      width: 500px;
      height: auto;
      animation-duration: 3s;
      animation-name: img;
      animation-iteration-count: infinite;

      @keyframes img {
        50% {
          width: 500px;
          height: auto;
        }

        50% {
          width: 600px;
          height: auto;
        }
      }
    }
  }
  button {
      position: fixed;
      
      bottom: 300px;
      right:600px;
      background-color: ${allColors.mainColor};
      padding: 10px;
      border-radius: 5px;
      font-size: 20px;
      color: black;
      cursor: pointer;
      outline: none;
      border: none;
      border: 3px solid ${allColors.mainColor};

      &:hover {
        border: 3px solid ${allColors.colors[0]};
      }
    }
`;
export default StyledDiv;
