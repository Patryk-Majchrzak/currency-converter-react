import { useState } from "react";
import Document from "./Document";
import Container from "./Container";
import Form from "./Form";

function App() {

  const currencies =
    [
      { id: 1, short: "PLN", rateToEUR: 0.2308, rateToGBP: 0.1950, rateToUSD: 0.2467 },
      { id: 2, short: "EUR", rateToPLN: 4.3331, rateToGBP: 0.8448, rateToUSD: 1.0692 },
      { id: 3, short: "GBP", rateToPLN: 5.1291, rateToEUR: 1.1837, rateToUSD: 1.2656 },
      { id: 4, short: "USD", rateToPLN: 4.0527, rateToEUR: 0.9353, rateToUSD: 0.7901 },
    ];

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  const [darkDocumentMotive, setDarkDocumentMotive] = useState("")

  const changeDocumentMotive = () => {
    if(darkDocumentMotive==="") {
      setDarkDocumentMotive("document--dark")
    } else {
      setDarkDocumentMotive("")
    }
  }

  return (
    <Document darkDocumentMotive={darkDocumentMotive}>
      <button className="document__button" onClick={changeDocumentMotive}>Włącz ciemny motyw</button>
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
