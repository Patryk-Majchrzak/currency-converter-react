import Document from "./Document";
import Container from "./Container";
import Form from "./Form";

function App() {

  return (
    <Document>
      <button className="document__button">Włącz ciemny motyw</button>
      <Container>
          <Form />
      </Container>
    </Document>
  );
}

export default App;
