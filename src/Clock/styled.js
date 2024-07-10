import styled from "styled-components"

export const ClockArea = styled.p`
    display: flex;
    justify-content: flex-end;
    font-family: monospace;
    font-size: 14px;
    color: ${({theme}) => theme.colors.fontGrey};
    margin-top:0
`