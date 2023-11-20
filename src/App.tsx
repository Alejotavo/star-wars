import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";
import LayOutHeader from "../src/components/LayOut-header/LayOut-header";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <LayOutHeader />
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
