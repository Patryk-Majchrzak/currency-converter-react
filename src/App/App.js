import { useEffect, useState } from "react";
import Container from "../Container";
import Clock from "../Clock";
import Form from "../Form";
import { welcome } from "../utils/welcome";
import { BackgroundButton, Main } from "./styled";
import { ThemeProvider } from "styled-components";
import { useThemeSelection } from "../useThemeSelection";
import { useGetDataFromAPI } from "../useGetDataFromAPI";

welcome();

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("PLN");

  const [currencyTo, setCurrencyTo] = useState("EUR");

  const [currencies, setCurrencies] = useState([]);

  const currenciesBase = useGetDataFromAPI("https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/codes");

  useEffect(() => {
    if (currenciesBase) {
      const currenciesSelect = (currenciesBase.supported_codes)
      setCurrencies(currenciesSelect);
    }
  }, [currenciesBase]);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  const {
    theme,
    darkDocumentMotive,
    changeDocumentMotive,
  } = useThemeSelection()

  return (
    <ThemeProvider theme={theme}>
      <Main $darkDocumentMotive={darkDocumentMotive}>
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
