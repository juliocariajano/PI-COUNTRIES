import styled from "styled-components";
import allColors from './color'

export const StyledFilter = styled.div`
    width: auto;
    max-height: 450px;
    margin-top: 80px;
    margin-right: 5px;
    background-color: ${allColors.colors[4]};
    padding: 30px;
    border-radius: 10px;
    color: ${allColors.colors[5]};
    font-size: 25px;
    position: sticky;
    top:70px;
    
    .filters{
        display: flex;
        flex-direction: column;
        color: ${allColors.colors[2]};
        font-size: 15px;
        
        select {
            margin-bottom: 10px;
            margin-top: 2px;
            padding: 6px 10px;
            color: #333333;
            background-color: #eeeeee;
            border: 1px solid #dddddd;
            cursor:pointer;
            border-radius: 5px;
        }
    }
    .link{
        color: white;
        text-decoration: none;
        cursor: pointer;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        &:hover{
            color: ${allColors.mainColor};
        }
    }
    button{
    background: rgba(44, 44, 44, 0.473);
    border: 2px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
    text-align: center;
    height: 35px;
    width: 80px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px;

    &:hover{
        border: 2px solid white;
        color: white;
    }
}
`