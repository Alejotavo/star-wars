import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";
import LayOutHeader from "../src/components/LayOut-header/LayOut-header";
import Films from "./components/Films-wrapper/Films-wrapper";
import Starships from "./components/Starships-wrapper/Starships-wrapper";
import Vehicles from "./components/Vehicles-wrapper/Vehicles-wrapper";
import Species from "./components/Species-wrapper/Species-wrapper";
import Planets from "./components/Planets-wrapper/Planets-wrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import CharacterDetails from "./components/Character-wrapper/Characters-list/Character-details/Character-details";

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
                <Route path="/starships" element={<Starships />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/species" element={<Species />} />
                <Route path="/planets" element={<Planets />} />
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
