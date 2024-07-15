import { useState, useEffect } from "react";
import Result from "./Result";
import CurrenciesSelect from "./CurrenciesSelect";
import { Fieldset, LabelText, Legend, Input, CurrenciesLabel, CalculateButton, CenteredParagraph } from "./styled";
import { useGetDataFromAPI } from "../useGetDataFromAPI";

const Form = ({ currencies, currencyFrom, changeCurrencyFrom, currencyTo, changeCurrencyTo }) => {

    const [amount, setAmount] = useState("");

    const [rate, setRate] = useState(1)

    const [date, setDate] = useState("")

    const changeAmount = ({ target }) => setAmount(target.value);

    const statusAPIRateAndDate = useGetDataFromAPI("https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/codes").status

    const rateAndDateBaseData = useGetDataFromAPI(`https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/pair/${currencyFrom}/${currencyTo}`).data;

    const [result, setResult] = useState("");

    useEffect(() => {
        if (rateAndDateBaseData) {
            setRate(currencyTo === currencyFrom ? 1 : rateAndDateBaseData.conversion_rate);
            setDate(rateAndDateBaseData.time_last_update_utc)
        }
    }, [rateAndDateBaseData, currencyTo, currencyFrom])

    const formatDate = (date) => {
        return new Date(date).toLocaleString(
            undefined,
            {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }
        )
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const calculateResult = () => {
        return (setResult({
            amountFrom: +amount,
            currencyFrom,
            currencyTo,
            amountTo: +amount * rate
        }));
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <p>
                    <label>
                        <LabelText>Kwota</LabelText>
                        <Input
                            type="number"
                            step="0.01"
                            min="0.01"
                            required
                            value={amount}
                            onChange={changeAmount}
                            placeholder="wpisz kwotę"
                        />
                    </label>
                </p>
                <p>
                    <CurrenciesLabel>
                        <CurrenciesSelect
                            title="Zamień z"
                            currencies={currencies}
                            currencyFromOrTo={currencyFrom}
                            changeCurrencyFromOrTo={changeCurrencyFrom}
                            additionalAttribute="from"
                        />
                    </CurrenciesLabel>
                    <CurrenciesLabel>
                        <CurrenciesSelect
                            title="Zamień na"
                            currencies={currencies}
                            currencyFromOrTo={currencyTo}
                            changeCurrencyFromOrTo={changeCurrencyTo}
                        />
                    </CurrenciesLabel>
                </p>
            </Fieldset>
            <p>
                <CalculateButton>
                    {statusAPIRateAndDate === "success"
                        ?
                        "Przelicz"
                        :
                        statusAPIRateAndDate === "loading"
                            ?
                            "Ładowanie"
                            :
                            "Unexpected error"}
                </CalculateButton>
            </p>
            <Result result={result} />
            <CenteredParagraph>
                Dane liczone wg kursów z dnia
                {statusAPIRateAndDate === "success"
                    ?
                    formatDate(date)
                    :
                    statusAPIRateAndDate === "loading"
                        ?
                        "Ładowanie"
                        :
                        "Unexpected error"}
            </CenteredParagraph>
        </form>
    );
};

export default Form;