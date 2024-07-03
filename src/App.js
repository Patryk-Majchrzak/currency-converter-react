import { useState } from "react";
import Currencies from "./Currencies";


const currencies =
  [ 
    { short: "PLN" },
    { short: "EUR" },
    { short: "GBP" },
    { short: "USD" },
  ];

function App() {

  const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

  const changeCurrencyTo = ({target}) => setCurrencyTo(target.value);

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

  const changeCurrencyFrom = ({target}) => setCurrencyFrom(target.value);

  return (
    <>
      <button className="document__button">Włącz ciemny motyw</button>
      <div className="flexBox">
        <div className="flexBox__container">
          <section className="section">
            <form className="form js-form">
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
              <p className="form__paragraph form__paragraph--centered form__paragraph--result">
                <strong className="js-result"></strong>
              </p>
              <p>
                <button className="form__button">Przelicz</button>
              </p>
              <p className="form__paragraph form__paragraph--centered">
                Dane liczone wg kursów z dnia 21.06.2024
              </p>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
