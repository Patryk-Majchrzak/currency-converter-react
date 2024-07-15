import { useState, useEffect } from "react";
import Result from "./Result";
import CurrenciesSelect from "./CurrenciesSelect";
import { Fieldset, LabelText, Legend, Input, CurrenciesLabel, CalculateButton, CenteredParagraph } from "./styled";

const Form = ({ currencies, currencyFrom, changeCurrencyFrom, currencyTo, changeCurrencyTo, rateAndDateBaseData }) => {
    const [amount, setAmount] = useState("");

    const [rate, setRate] = useState(1)

    const [date, setDate] = useState("")

    const changeAmount = ({ target }) => setAmount(target.value);

    const [result, setResult] = useState("");

    useEffect(() => {
        if (rateAndDateBaseData) {
            setRate(currencyTo === currencyFrom ? 1: rateAndDateBaseData.conversion_rate);
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