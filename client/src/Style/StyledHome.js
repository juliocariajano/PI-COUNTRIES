import styled from "styled-components";

export const StyledHome = styled.div`
background-image: url(https://th.bing.com/th/id/R.f08a0ccf704eb94177a18595f2d37f6c?rik=mN3VxX7wK4upAQ&pid=ImgRaw&r=0);
// https://fondosmil.com/fondo/61978.jpg
background-size: cover;
width: 100%;
height: 100%;
// position: fixed;
top: 0px;
left: 0px;
display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
`
export const StyledCards = styled.div`
    width: 990px;
    min-height: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //border: 1px solid black;
    justify-content: center;

    .loading {
        font-size: 40px;
        font-weight: bold;
    }
  
`

