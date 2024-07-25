import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Result from "./Result";
import CurrenciesSelect from "./CurrenciesSelect";
import { Fieldset, LabelText, Legend, Input, CurrenciesLabel, CalculateButton, CenteredParagraph } from "./styled";
import { formatDate } from "../utils/formatDate";
import useResultUpdate from "./useResultUpdate";

const Form = ({ currencies, currencyFrom, changeCurrencyFrom, currencyTo, changeCurrencyTo, dataAPI }) => {
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState(1)
    const [date, setDate] = useState("")

    const changeAmount = ({ target }) => setAmount(target.value);

    useEffect(() => {
        if (dataAPI) {
            setRate(currencyTo === currencyFrom ? 1 : dataAPI.conversion_rates[currencyTo]);
            setDate(dataAPI.time_last_update_utc);
        }
    }, [dataAPI, currencyTo, currencyFrom])

    const { resultText, LoadCurrencyCalculation } = useResultUpdate(amount, currencyFrom, currencyTo, rate, dataAPI);

    const onFormSubmit = (event) => {
        event.preventDefault();
        LoadCurrencyCalculation();
    };

    const [t] = useTranslation("translation")

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>{t("Form.currencyConverter")}</Legend>
                <p>
                    <label>
                        <LabelText>{t("Form.amount")}</LabelText>
                        <Input
                            type="number"
                            step="0.01"
                            min="0.01"
                            required
                            value={amount}
                            onChange={changeAmount}
                            placeholder={t("Form.placeholder")}
                        />
                    </label>
                </p>
                <p>
                    <CurrenciesLabel>
                        <CurrenciesSelect
                            title={t("Form.exchangeFrom")}
                            currencies={currencies}
                            currencyFromOrTo={currencyFrom}
                            changeCurrencyFromOrTo={changeCurrencyFrom}
                            additionalAttribute="from"
                        />
                    </CurrenciesLabel>
                    <CurrenciesLabel>
                        <CurrenciesSelect
                            title={t("Form.exchangeTo")}
                            currencies={currencies}
                            currencyFromOrTo={currencyTo}
                            changeCurrencyFromOrTo={changeCurrencyTo}
                        />
                    </CurrenciesLabel>
                </p>
            </Fieldset>
            <p>
                <CalculateButton>
                    {t("Form.calculationButton")}
                </CalculateButton>
            </p>
            <Result resultText={resultText} />
            <CenteredParagraph>
                {t("Form.dataRefresh")} {formatDate(date)}
            </CenteredParagraph>
        </form>
    );
};

export default Form;