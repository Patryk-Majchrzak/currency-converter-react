const Result = ({result}) => {    

    const writeResult = () => {
        if(result) {
            return(`${result.amountFrom.toFixed(2)} ${result.currencyFrom} to ${result.amountTo.toFixed(2)} ${result.currencyTo}`)
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