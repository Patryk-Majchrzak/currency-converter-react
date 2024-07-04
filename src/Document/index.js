import "./style.css"

const Document = ({ children, darkDocumentMotive }) => (
    <main className={`document ${darkDocumentMotive}`}>
        {children}
    </main>
);

export default Document;