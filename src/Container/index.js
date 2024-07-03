import "./style.css"

const Container = ({children}) => (
    <div className="flexBox">
        <div className="flexBox__container">
            {children}
        </div>
    </div>
);

export default Container;