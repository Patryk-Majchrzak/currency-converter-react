import { useState } from "react";
import Container from "../Container";
import Clock from "../Clock";
import Form from "../Form";
import { currencies } from "./currencies";
import { welcome } from "../utils/welcome";
import { BackgroundButton, Main } from "./styled";
import { ThemeProvider } from "styled-components";
import { useThemeSelection } from "../useThemeSelection";

welcome();

function App() {

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const [currencyTo, setCurrencyTo] = useState(currencies[1].short);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  const {
    theme,
    darkDocumentMotive,
    changeDocumentMotive,
  } = useThemeSelection()

  return (
    <ThemeProvider theme={theme}>
      <Main darkDocumentMotive={darkDocumentMotive}>
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
      </Main>
    </ThemeProvider>
  );
}

export default App;
