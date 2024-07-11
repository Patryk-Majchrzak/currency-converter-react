import styled from "styled-components";
import background from "../images/background.jpg";

export const Main = styled.main`
    background-image: url("${background}");;
    background-position: center;
    background-repeat: cover;
    background-size: cover;
    font-family: "Roboto", sans-serif;
    min-height:100vh;
 `

export const BackgroundButton = styled.button`
    background-color: ${({theme}) => theme.colors.basic};
    color: ${({theme}) => theme.colors.fontWhite};
    padding: 10px;
    border-radius: 10px;
    margin: 30px 50px;
    transition: background 0.5s, transform 1s;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: ${({theme}) => theme.colors.basicHover};
    }
    
    &:active{
        transform: scale(1.1);
        background-color: ${({theme}) => theme.colors.basicActive};
    }
`