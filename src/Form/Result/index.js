const Result = ({ result }) => {
    if (result) {
        const formattedAmountFrom = result.amountFrom.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        const formattedAmountTo = result.amountTo.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        return (
                <p className="form__paragraph form__paragraph--centered form__paragraph--result">
                    <strong>
                        {formattedAmountFrom}&nbsp;{result.currencyFrom}&nbsp;to
                        {" "}
                        {formattedAmountTo}&nbsp;{result.currencyTo}
                    </strong>
                </p>
        )
    }
}

export default Result;