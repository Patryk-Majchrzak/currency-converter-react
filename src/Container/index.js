import "./style.css"

const Container = ({children}) => (
    <div class="flexBox">
        <div class="flexBox__container">
            {children}
        </div>
    </div>
);

export default Container;