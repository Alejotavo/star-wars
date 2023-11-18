import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <CharacterWrapper />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
