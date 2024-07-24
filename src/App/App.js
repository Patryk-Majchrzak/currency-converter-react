import { useEffect, useState } from "react";
import Container from "../Container";
import Clock from "../Clock";
import Form from "../Form";
import { welcome } from "../utils/welcome";
import { BackgroundButton, Main, Loading, PotentialError, Loader, LoadingContainer } from "./styled";
import { ThemeProvider } from "styled-components";
import { useThemeSelection } from "../useThemeSelection";
import { useGetDataFromAPI } from "../useGetDataFromAPI";
import { useTranslation } from "react-i18next";

welcome();

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("PLN");

  const [currencyTo, setCurrencyTo] = useState("EUR");

  const [currencies, setCurrencies] = useState([]);

  const statusForDataAPI = useGetDataFromAPI(`https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/latest/${currencyFrom}`).status;

  const dataAPI = useGetDataFromAPI(`https://v6.exchangerate-api.com/v6/67a7a303b054e72ce029ec5c/latest/${currencyFrom}`).data;

  const [t] = useTranslation("translation");

  useEffect(() => {
    if (dataAPI) {
      const currenciesSelect = (Object.keys(dataAPI.conversion_rates).sort());
      setCurrencies(currenciesSelect);
    }
  }, [dataAPI]);

  const changeCurrencyFrom = ({ target }) => setCurrencyFrom(target.value);

  const changeCurrencyTo = ({ target }) => setCurrencyTo(target.value);

  const {
    theme,
    isDocumentThemeDark,
    changeDocumentTheme,
  } = useThemeSelection()

  return (
    <ThemeProvider theme={theme}>
      <Main $isDocumentThemeDark={isDocumentThemeDark}>
        <BackgroundButton onClick={changeDocumentTheme}>{t("App.turnOn")} {!isDocumentThemeDark ? t("App.dark") : t("App.bright")} {t("App.theme")}</BackgroundButton>
        <Container>
          <Clock />
          {statusForDataAPI === "loading"
            ? (
              <LoadingContainer>
                <Loading>
                  {t("App.loading")}
                </Loading>
                <Loader />
              </LoadingContainer>
            )
            :
            statusForDataAPI ==="error" ? (
              <PotentialError>
                {t("App.error")}
              </PotentialError>
            )
              : (
                <Form
                  currencies={currencies}
                  currencyFrom={currencyFrom}
                  changeCurrencyFrom={changeCurrencyFrom}
                  currencyTo={currencyTo}
                  changeCurrencyTo={changeCurrencyTo}
                  dataAPI = {dataAPI}
                />
              )
          }
        </Container>
      </Main>
    </ThemeProvider>
  );
}

export default App;
