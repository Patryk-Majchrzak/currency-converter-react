import { LabelText } from "../styled";
import { Select } from "./styled";

const CurrenciesSelect = ({ title, currencies, currencyFromOrTo, changeCurrencyFromOrTo, additionalAttribute }) => (
    <>
        <LabelText>{title}</LabelText>
        <Select
            from={additionalAttribute}
            value={currencyFromOrTo}
            onChange={changeCurrencyFromOrTo}>
            {currencies.map((currency) => (
                <option key={currency}>
                    {currency}
                </option>
            ))}
        </Select>
    </>
);

export default CurrenciesSelect;