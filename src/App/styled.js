import styled from "styled-components";
import background from "../images/background.jpg";

export const Main = styled.main`
    background-image: url("${background}");
    background-position: center;
    background-repeat: cover;
    background-size: cover;
    font-family: "Roboto", sans-serif;
    min-height:100vh;
 `

export const BackgroundButton = styled.button`
    background-color: ${({ theme }) => theme.colors.basic};
    color: ${({ theme }) => theme.colors.fontWhite};
    padding: 10px;
    border-radius: 10px;
    margin: 30px 50px;
    transition: background 0.5s, transform 1s;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.colors.basicHover};
    }
    
    &:active{
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.colors.basicActive};
    }
`
export const LoadingContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.basic};
`

export const Loading = styled.div`
    color:${({ theme }) => theme.colors.fontWhite};
    padding: 10px;
`

export const Loader = styled.div`
    border: 5px solid ${({ theme }) => theme.colors.loadingCircleBorder};
    border-top: 5px solid ${({ theme }) => theme.colors.loadingCircleMovingPart};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export const PotentialError = styled.div`
    background-color: ${({ theme }) => theme.colors.error};
    color:${({ theme }) => theme.colors.fontWhite};
    text-align: center;
    padding: 10px;
`
