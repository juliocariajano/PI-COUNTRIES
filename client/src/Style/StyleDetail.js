import styled from "styled-components";
import AllColors from "./color";

const StyledDetails = styled.div`
  width: 1300px;
  height: 650px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(13, 184, 156, 0.7) 67%,
    rgba(21, 43, 98, 0.70) 100%
  );
  .mainIMG {
    top-border:10px;
    height: 180px;
    width: 380px;
    margin-rigth:70px;
    border-radius: 20%;

  }




  .font{
    font-size: 18px;;
}
.font1{
  font-size: 16px;
  border-width: 1rem;
}

        button {
        background: rgba(44, 44, 44, 0.473);
        border: 2px solid ${AllColors.mainColor};
        color: ${AllColors.mainColor};
        text-align: center;
        height: 35px;
        width: 120px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        margin-bottom: 0px;
       /* A hover effect. */
       
        &:hover {
          border: 2px solid white;
          color: white;
        }
      }
     
      }
    }
  }
`;
export default StyledDetails;
