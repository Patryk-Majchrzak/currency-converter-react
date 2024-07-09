import { useState } from "react";
import Document from "../Document";
import Container from "../Document/Container";
import Clock from "../Clock";
import Form from "../Form";
import { currencies } from "./currencies";  

function App() {

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  const [darkDocumentMotive, setDarkDocumentMotive] = useState("")

  const changeDocumentMotive = () => {
    if(!darkDocumentMotive) {
      setDarkDocumentMotive("document--dark")
    } else {
      setDarkDocumentMotive("")
    }
  }

  return (
    <Document darkDocumentMotive={darkDocumentMotive}>
      <button className="document__button" onClick={changeDocumentMotive}>Włącz {darkDocumentMotive==="" ? "ciemny" :"jasny"} motyw</button>
      <Container>
        <Clock />
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
