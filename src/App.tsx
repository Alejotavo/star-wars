import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";
import LayOutHeader from "../src/components/LayOut-header/LayOut-header";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <LayOutHeader />
        <Routes>
          <Route path="/" element={<CharacterWrapper />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
