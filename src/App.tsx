import "./App.css";
import CharacterWrapper from "./components/Character-wrapper/Character-wrapper";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <CharacterWrapper />
      </Container>
    </div>
  );
}

export default App;
