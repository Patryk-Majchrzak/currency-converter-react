import styled from "styled-components";

export const ResultContainer = styled.div`
    color: ${({theme}) => theme.colors.basic};
    font-size: 20px;
    display: grid;
    grid-template-columns: auto 1fr;    
    padding: 10px;
    box-shadow: 1px 1px 0px 2px #ccc;
    padding: 5px;
    background-color: hsl(0, 0%, 95%);
`

export const CenteredDiv = styled.div`
    text-align:center
`