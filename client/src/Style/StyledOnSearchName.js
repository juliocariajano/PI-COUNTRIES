import styled from 'styled-components'
import AllColors from './color'

const StyledForm = styled.form` // div de la navbar
    //display: flex;
    display:none;
    flex-direction: row;
    align-items: center; 
    position: absolute;
    margin-left:850px;

    .mensaje{
        // font-size: 15px;
        // position: absolute;
        // top: 20px;
        // color:yellow;
        // margin-left:40px;
    }
    input {
        padding: 1em;
        width: 12em;
        height: 5px;
        border: 1px solid #15d1b8;
        border-radius: 10em;
        box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
        text-align: left;
        font-size: 14px;
}

.submit{
    padding: 1em;
        width: 6em;
        height: 5px;
        border: 1px solid #15d1b8;
        border-radius: 10em;
        box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.75);
        // text-align: center;
        line-height: 10%;
        font-size: 14px;
        margin-left:220px;
        top: 3px;

    
}
`


export default StyledForm
