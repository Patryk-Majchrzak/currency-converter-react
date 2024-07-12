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

    const rateAndDateBase = useGetDataFromAPI(`https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/pair/${currencyFrom}/${currencyTo}`);

    const [result, setResult] = useState("");

    useEffect(() => {
        if (rateAndDateBase) {
            setRate(currencyTo === currencyFrom ? 1: rateAndDateBase.conversion_rate);
            setDate(rateAndDateBase.time_last_update_utc)
        }
    }, [rateAndDateBase, currencyTo])

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
                    Przelicz
                </CalculateButton>
            </p>
            <Result result={result} />
            <CenteredParagraph>
                Dane liczone wg kursów z dnia {formatDate(date)}
            </CenteredParagraph>
        </form>
    );
};

export default Form;