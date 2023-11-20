import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Characters</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/game">Game</Nav.Link>
            </Nav.Item>
          </Nav>

          <Routes>
            <Route path="/" element={<CharacterWrapper />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
