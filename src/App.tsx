import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";
import LayOutHeader from "../src/components/LayOut-header/LayOut-header";
import Films from "./components/Films-wrapper/Films-wrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import CharacterDetails from "./components/Characters-list/Character-details/Character-details";

function App() {
  return (
    <div className="App">
      <LayOutHeader />
      <Container fluid>
        <Row>
          <Col>
            <Router>
              <Routes>
                <Route path="*" element={<CharacterWrapper />} />
                <Route path="/films" element={<Films />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
