import styled from "styled-components"

export const BackgroundButton = styled.button`
    background-color: hsl(115, 90%, 20%);
    color:white;
    padding: 10px;
    border-radius: 10px;
    margin: 30px 50px;
    transition: background 0.5s, transform 1s;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: hsl(115, 90%, 25%);
    }
    
    &:active{
        transform: scale(1.1);
        background-color: hsl(115, 90%, 30%);
    }
`