import { useEffect, useState } from "react";
import Container from "../Container";
import Clock from "../Clock";
import Form from "../Form";
import { welcome } from "../utils/welcome";
import { BackgroundButton, Main, Loading, PotentialError, Loader, LoadingContainer } from "./styled";
import { ThemeProvider } from "styled-components";
import { useThemeSelection } from "../useThemeSelection";
import { useGetDataFromAPI } from "../useGetDataFromAPI";

welcome();

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("PLN");

  const [currencyTo, setCurrencyTo] = useState("EUR");

  const [currencies, setCurrencies] = useState([]);

  const statusAPICurrencies = useGetDataFromAPI("https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/codes").status
  const statusAPIRateAndDate = useGetDataFromAPI("https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/codes").status

  const currenciesBaseData = useGetDataFromAPI("https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/codes").data;
  const rateAndDateBaseData = useGetDataFromAPI(`https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/pair/${currencyFrom}/${currencyTo}`).data;

  useEffect(() => {
    if (currenciesBaseData) {
      const currenciesSelect = (currenciesBaseData.supported_codes)
      setCurrencies(currenciesSelect);
    }
  }, [currenciesBaseData]);

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
          {statusAPICurrencies || statusAPIRateAndDate === "loading"
            ? (
              <LoadingContainer>
                <Loading>
                  Ładuję waluty i ich kursy
                </Loading>
                <Loader />
              </LoadingContainer>
            )
            :
            statusAPICurrencies || statusAPIRateAndDate === "error" ? (
              <PotentialError>
                Coś poszło nie tak, sprawdź połączenie z internetem i spróbuj ponownie później
              </PotentialError>
            )
              : (
                <Form
                  currencies={currencies}
                  currencyFrom={currencyFrom}
                  changeCurrencyFrom={changeCurrencyFrom}
                  currencyTo={currencyTo}
                  changeCurrencyTo={changeCurrencyTo}
                  rateAndDateBaseData={rateAndDateBaseData}
                />
              )
          }
        </Container>
      </Main>
    </ThemeProvider>
  );
}

export default App;
