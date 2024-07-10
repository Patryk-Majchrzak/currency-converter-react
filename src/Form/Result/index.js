import { ResultParagraph, CenteredDiv } from "./styled";

const Result = ({ result }) => {
    if (result) {
        const formattedAmountFrom = result.amountFrom.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        const formattedAmountTo = result.amountTo.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        return (
                <ResultContainer>
                    <div>Wynik:</div>
                    <CenteredDiv>
                        <strong>
                            {formattedAmountFrom}&nbsp;{result.currencyFrom}&nbsp;to
                            {" "}
                            {formattedAmountTo}&nbsp;{result.currencyTo}
                        </strong>
                    </CenteredDiv>
                </ResultContainer>
        )
    } else {
        return <ResultParagraph>Wynik:</ResultParagraph>
    }
}

export default Result;