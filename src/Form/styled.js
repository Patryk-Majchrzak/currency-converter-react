import styled from "styled-components";

export const Fieldset = styled.fieldset`
        border-radius: 10px;
        border:1px solid rgba(0, 0, 0, 0.503);
`

export const Legend = styled.legend`
    background-color: rgb(16, 119, 6);
    padding: 10px;
    color: white;
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
    background-color: hsl(115, 90%, 25%);
    color:white;
    padding: 10px;
    width:100%;
    border-radius: 10px;
    transition: background 0.5s, transform 1s;

    &:hover{
        background-color: hsl(115, 79%, 31%);
        cursor: pointer;
        transform: scale(1.05);
    }

    &:active{
        background-color: hsl(115, 66%, 43%);
        color:hsl(0, 0%, 0%);
    }
`

export const CenteredParagraph = styled.p`
    text-align:center;    
`