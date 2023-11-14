import { useState, useEffect } from "react";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";
import { Data, Character } from "./Models/star-wars";
import CharacterList from "./components/Characters-list/Character-list";

//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState<Data>({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredData, setFilteredData] = useState<Character[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((e) => console.log(e.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log("dataaa", data);

  useEffect(() => {
    setFilteredData(
      data?.results.filter((result) =>
        result.name.toLowerCase().includes(searchFilter)
      )
    );
  }, [data, searchFilter]);

  return (
    <div className="App">
      <input
        onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search by Name"
      />
      <ul>
        {isLoading && <Spinner />}
        {filteredData &&
          filteredData.map((props, index) => (
            <CharacterList key={index} {...props} />
          ))}
      </ul>
    </div>
  );
}

export default App;
