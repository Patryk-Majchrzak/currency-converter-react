import { useState } from "react";
import Document from "../Document";
import Container from "../Document/Container";
import Clock from "../Clock";
import Form from "../Form";
import { currencies } from "./currencies";
import { welcome } from "../utils/welcome";
import { BackgroundButton } from "./styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes";

welcome();

function App() {

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  const [darkDocumentMotive, setDarkDocumentMotive] = useState("")

  const changeDocumentMotive = () => {
    if (!darkDocumentMotive) {
      setDarkDocumentMotive("dark")
    } else {
      setDarkDocumentMotive("")
    }
  }

  const theme = darkDocumentMotive==="dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Document darkDocumentMotive={darkDocumentMotive}>
        <BackgroundButton onClick={changeDocumentMotive}>Włącz {!darkDocumentMotive ? "ciemny" : "jasny"} motyw</BackgroundButton>
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
    </ThemeProvider>
  );
}

export default App;
