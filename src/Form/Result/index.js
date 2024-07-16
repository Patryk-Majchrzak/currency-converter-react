import { ResultContainer, CenteredDiv } from "./styled";

const Result = ({ resultText }) => {

    return (
        <ResultContainer>
            <div>Wynik:</div>
            <CenteredDiv>
                {resultText}
            </CenteredDiv>
        </ResultContainer>
    )
}

export default Result;