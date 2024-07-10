import styled, {css} from "styled-components";

export const Select = styled.select`
    padding: 5px;
    border-radius: 10px;

    ${({from}) => from && css`
        margin-right:30px;
    
        @media(max-width:527px){
            margin-bottom:10px;
        }

        @media(max-width:370px){
            margin-right: 0;
        }
    `}
`