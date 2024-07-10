import "./style.css"
import { Main } from "./styled";

const Document = ({ children }) => (
    <Main>
        {children}
    </Main>
);

export default Document;