import styled from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    min-height: calc(100vh - 200px); /* 100px for button and 100px for .flexBox__container padding ; */
    justify-content: center;
    align-items: center;
`

export const FlexBoxContainer = styled.div`
    flex-basis:800px;
    padding: 50px;
    background-color: ${({theme}) => theme.colors.containerColor};
    padding: 30px;
    border-radius: 10px;
    box-shadow: ${({theme}) => theme.boxShadows.container};

    @media(max-width:992px){
        max-width: 95%;
    }
`