import styled, {css} from "styled-components";

export const Select = styled.select`
    padding: 5px;
    border-radius: 10px;

    ${({from}) => from && css`
        margin-right:30px;
    
        @media(max-width:${({theme}) => theme.breakpoints.small}px){
            margin-bottom:10px;
        }

        @media(max-width:${({theme}) => theme.breakpoints.extraSmall}px){
            margin-right: 0;
        }
    `}
`