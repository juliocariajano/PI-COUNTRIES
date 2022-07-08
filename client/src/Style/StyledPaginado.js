import styled from "styled-components";

const StylePaginado = styled.nav`
    

        .button {
            padding: 3px 8px;
            border: unset;
            border-radius: 15px;
            color: #212121;
            z-index: 1;
            background: #e8e8e8;
            position: relative;
            font-weight: 1000;
            font-size: 17px;
            -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
            box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
            transition: all 250ms;
            overflow: hidden;
           }
           
           .button::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            border-radius: 15px;
            background-color: #212121;
            z-index: -1;
            -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
            box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
            transition: all 250ms
           }
           .button:hover {
            background-color: #15d1b8;
            box-shadow: 0px 15px 20px  #15d1b8;
            color: #fff;
            transform: translateY(-7px);
          }
          
          .button:active {
            transform: translateY(-1px);
          }
    
          .input:focus, input:hover {
            border-color: #15d1b8;
           }


    // padding: 1em;
    // width: 2em;
    // justify-content: center;
    // height: 5px;
    // border: 1px solid #15d1b8;
    // border-radius: 10em;
    // box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
    // -webkit-box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
    // -moz-box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);

    
    
// .btn:link,
// .btn:visited {
//  text-transform: uppercase;
//  text-decoration: none;
//  color: rgb(27, 27, 27);
//  padding: 10px 30px;
//  border: 1px solid;
//  border-radius: 5em;
//  display: inline-block;
//  transition: all .2s;
//  position: relative;
// }

// .btn:hover {
//  transform: translateY(-5px);
//  box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
// }

// .btn:active {
//  transform: translateY(-3px);
// }

// .btn::after {
//  content: "";
//  display: inline-block;
//  height: 100%;
//  width: 100%;
//  border-radius: 100px;
//  top: 0;
//  left: 0;
//  position: absolute;
//  z-index: -1;
//  transition: all .3s;
// }

// .btn:hover::after {
//  background-color: rgb(0, 238, 255);
//  transform: scaleX(1.4) scaleY(1.5);
//  opacity: 0;
// }
`

export default StylePaginado