const Result = ({ result }) => {

    const writeResult = (result) => {
        if (result) {
            const formattedAmountFrom = result.amountFrom.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
            const formattedAmountTo =  result.amountTo.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");

            return (`${formattedAmountFrom} ${result.currencyFrom} to ${formattedAmountTo} ${result.currencyTo}`)
        }
    }

    return (
        <>
            <p className="form__paragraph form__paragraph--centered form__paragraph--result">
                <strong>
                    {writeResult(result)}
                </strong>
            </p>
            <p>
                <button className="form__button">
                    Przelicz
                </button>
            </p>
        </>
    )
}

export default Result;