import { useEffect, useState } from "react";
import CharacterList from "../Characters-list/Character-list";
import { Character, Data } from "./../../Models/star-wars";
import Spinner from "../Spinner/Spinner";

import { fetchData } from "./../../Services/Services";

const CharacterWrapper = () => {
  const [data, setData] = useState<Data>({ results: [] });
  const [filteredData, setFilteredData] = useState<Character[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((response: Data) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      data.results.filter((result) =>
        result.name.toLowerCase().includes(searchFilter)
      )
    );
  }, [data, searchFilter]);

  return (
    <>
      <input
        onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search by Name"
      />
      <ul>
        {isLoading && <Spinner />}
        {filteredData &&
          filteredData.map((item, index) => (
            <CharacterList key={index} name={item.name} />
          ))}
      </ul>
    </>
  );
};

export default CharacterWrapper;
