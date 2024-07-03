import "./style.css"
import { useState } from "react";
import Currencies from "./Currencies"
import Result from "./Result";

const Form = ({ currencies, currencyFrom, changeCurrencyFrom, currencyTo, changeCurrencyTo }) => {
    const [amount, setAmount] = useState("");
    
    const changeAmount = ({ target }) => setAmount(target.value);

    const [result, setResult] = useState("");

    const ratebase = currencies
        .find(({short}) => short === currencyFrom);

    const rate = ratebase[currencyTo];

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const calculateResult = () => {
        return (setResult(
            {
                amountFrom: +amount,
                currencyFrom,
                currencyTo,
                amountTo: +amount*rate
            }
        ));
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota</span>
                        <input
                            type="number"
                            step="0.01"
                            min="0.01"
                            className="form__input"
                            required
                            value={amount}
                            onChange={changeAmount}
                        />
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <Currencies
                            title="Zamień z"
                            currencies={currencies}
                            currencyFromOrTo={currencyFrom}
                            changeCurrencyFromOrTo={changeCurrencyFrom}
                            additionalClass="form__select--from"
                        />
                    </label>
                    <label className="form__label">
                        <Currencies
                            title="Zamień na"
                            currencies={currencies}
                            currencyFromOrTo={currencyTo}
                            changeCurrencyFromOrTo={changeCurrencyTo}
                        />
                    </label>
                </p>
            </fieldset>
            <Result result={result} />
            <p className="form__paragraph form__paragraph--centered">
                Dane liczone wg kursów z dnia 21.06.2024
            </p>
        </form>
    );
};

export default Form;