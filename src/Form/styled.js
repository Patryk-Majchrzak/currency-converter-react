import styled, { ThemeContext } from "styled-components";

export const Fieldset = styled.fieldset`
    border-radius: 10px;
    border:1px solid ${({theme}) => theme.colors.borderFieldset};
`

export const Legend = styled.legend`
    background-color: ${({theme}) => theme.colors.basic};
    padding: 10px;
    color: ${({theme}) => theme.colors.fontWhite};
    border-radius: 10px;
`

export const LabelText = styled.span`
    width: 80px;
    display: inline-block;
`

export const Input = styled.input`
    width:100%;
    max-width: 560px;
    padding: 7px;
    border-radius: 10px;
`

export const CurrenciesLabel = styled.label`
    display: inline-block;
`

export const CalculateButton = styled.button` 
    background-color: ${({theme}) => theme.colors.basic};
    color:white;
    padding: 10px;
    width:100%;
    border-radius: 10px;
    transition: background 0.5s, transform 1s;

    &:hover{
        background-color: ${({theme}) => theme.colors.basicHover};
        cursor: pointer;
        transform: scale(1.05);
    }

    &:active{
        background-color: ${({theme}) => theme.colors.basicActive};
        color: ${({theme}) => theme.colors.black};
    }
`

export const CenteredParagraph = styled.p`
    text-align:center;    
`