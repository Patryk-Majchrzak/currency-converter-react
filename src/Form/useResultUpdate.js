import { useState, useEffect } from "react";

const useResultUpdate = (amount, currencyFrom, currencyTo, rate) => {

    const [result, setResult] = useState("");
    const [resultText, setResultText] = useState("");
    
    useEffect(() => {
        calculateResult()
    }, [currencyFrom, currencyTo, amount])

    const calculateResult = () => {
        return (setResult({
            amountFrom: +amount,
            currencyFrom,
            currencyTo,
            amountTo: +amount * rate
        }));
    };

    const writeResult = (result) => {
        if (result) {
            const formattedAmountFrom = result.amountFrom.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            const formattedAmountTo = result.amountTo.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            return (setResultText(
                <strong>
                    {formattedAmountFrom}&nbsp;{result.currencyFrom}&nbsp;to
                    {" "}
                    {formattedAmountTo}&nbsp;{result.currencyTo}
                </strong>
            ))
        }
    }

    return {result, resultText, writeResult}
}

export default useResultUpdate