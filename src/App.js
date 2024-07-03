function App() {
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
                    <input type="number" step="0.01" min="0.01" className="form__input js-amount" required />
                  </label>
                </p>
                <p>
                  <label className="form__label">
                    <span className="form__labelText">Zamień z</span>
                    <select className="form__select form__select--from js-currencyFrom">
                      <option className="form__option">PLN</option>
                      <option className="form__option">EUR</option>
                      <option className="form__option">GBP</option>
                      <option className="form__option">USD</option>
                    </select>
                  </label>
                  <label className="form__label">
                    <span className="form__labelText">Zamień na</span>
                    <select className="form__select js-currencyTo">
                      <option className="form__option">PLN</option>
                      <option className="form__option" selected>EUR</option>
                      <option className="form__option">GBP</option>
                      <option className="form__option">USD</option>
                    </select>
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
