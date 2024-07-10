import styled from "styled-components"

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