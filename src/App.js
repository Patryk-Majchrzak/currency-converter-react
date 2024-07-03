import { useState } from "react";
import Document from "./Document";
import Container from "./Container";
import Form from "./Form";

function App() {

  const currencies =
    [
      { id: 1, short: "PLN", EUR: 0.2308, GBP: 0.1950, USD: 0.2467 },
      { id: 2, short: "EUR", PLN: 4.3331, GBP: 0.8448, USD: 1.0692 },
      { id: 3, short: "GBP", PLN: 5.1291, EUR: 1.1837, USD: 1.2656 },
      { id: 4, short: "USD", PLN: 4.0527, EUR: 0.9353, USD: 0.7901 },
    ];

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  return (
    <Document>
      <button className="document__button">Włącz ciemny motyw</button>
      <Container>
        <Form
          currencies={currencies}
          currencyFrom={currencyFrom}
          changeCurrencyFrom={changeCurrencyFrom}
          currencyTo={currencyTo}
          changeCurrencyTo={changeCurrencyTo}
        />
      </Container>
    </Document>
  );
}

export default App;
