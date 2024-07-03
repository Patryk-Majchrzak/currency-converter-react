import "./style.css"
import Currencies from "./Currencies"
import Result from "./Result";
import { useState } from "react";

const Form = () => {

    const currencies =
        [
            { short: "PLN" },
            { short: "EUR" },
            { short: "GBP" },
            { short: "USD" },
        ];

    const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

    const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

    const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota</span>
                        <input type="number" step="0.01" min="0.01" className="form__input" required />
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
            <Result />
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <p className="form__paragraph form__paragraph--centered">
                Dane liczone wg kursów z dnia 21.06.2024
            </p>
        </form>
    )
}

export default Form;