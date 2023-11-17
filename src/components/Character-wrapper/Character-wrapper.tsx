import { useEffect, useState } from "react";
import CharacterList from "../Characters-list/Character-list";
import HeaderFilter from "../Header-filter/Header-filter";
import { Character, Data } from "./../../Models/star-wars";
import Spinner from "../Spinner/Spinner";
import "./Character-wrapper.scss";

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
      <HeaderFilter setSearchFilter={setSearchFilter} />

      <ul className="wrapper">
        {isLoading && <Spinner />}
        {filteredData &&
          filteredData.map((item, index) => (
            <CharacterList key={index} name={item.name} gender={item.gender} />
          ))}
      </ul>
    </>
  );
};

export default CharacterWrapper;
