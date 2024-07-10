import "./style.css"
import { FlexBox } from "./styled";
import { FlexBoxContainer } from "./styled";

const Container = ({ children }) => (
    <FlexBox>
        <FlexBoxContainer>
            {children}
        </FlexBoxContainer>
    </FlexBox>
);

export default Container;