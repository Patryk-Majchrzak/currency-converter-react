import { useTranslation } from "react-i18next";
import { ResultContainer, CenteredDiv } from "./styled";

const Result = ({ resultText }) => {
    const [t] = useTranslation("translation")

    return (
        <ResultContainer>
            <div>{t("Result")}</div>
            <CenteredDiv>
                {resultText}
            </CenteredDiv>
        </ResultContainer>
    )
}

export default Result;