import { CenteredParagraph } from "../styled";
import { ResultParagraph } from "./styled";

const Result = ({ result }) => {
    if (result) {
        const formattedAmountFrom = result.amountFrom.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        const formattedAmountTo = result.amountTo.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        return (
                <ResultParagraph>
                    <div>Wynik:</div>
                    <CenteredParagraph as="div">
                        <strong>
                            {formattedAmountFrom}&nbsp;{result.currencyFrom}&nbsp;to
                            {" "}
                            {formattedAmountTo}&nbsp;{result.currencyTo}
                        </strong>
                    </CenteredParagraph>
                </ResultParagraph>
        )
    } else {
        return <ResultParagraph>Wynik:</ResultParagraph>
    }
}

export default Result;