import { SetStateAction, useEffect, useState } from "react";
import CharacterList from "../Characters-list/Character-list";
import HeaderFilter from "../Header-filter/Header-filter";
import { Character, Data } from "./../../Models/star-wars";
import Spinner from "../Spinner/Spinner";
import "./Character-wrapper.scss";
import Table from "react-bootstrap/Table";

import { fetchData } from "./../../Services/Services";
import Alert from "../Alert/alert";

import Pagination from "../Characters-list/Pagination/Pagination";

const CharacterWrapper = () => {
  const [data, setData] = useState<Data>({ results: [], count: 0 });
  const [filteredData, setFilteredData] = useState<Character[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [dropdownFilter, setDropdownFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (gender: SetStateAction<string>) => {
    setDropdownFilter(gender);
    console.log("Dropdown value", dropdownFilter);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(currentPage)
      .then((response: Data) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  useEffect(() => {
    let filteredResults = data.results;

    // Aplicar filtro por nombre si searchFilter está definido
    if (searchFilter) {
      filteredResults = filteredResults.filter((result) =>
        result.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    // Aplicar filtro por género si dropdownFilter está definido
    if (dropdownFilter && dropdownFilter !== "all") {
      filteredResults = filteredResults.filter(
        (result) => result.gender.toLowerCase() === dropdownFilter.toLowerCase()
      );
    }

    setFilteredData(filteredResults);
  }, [data, searchFilter, dropdownFilter]);

  return (
    <>
      {!error ? (
        <>
          {!isLoading ? (
            <>
              <HeaderFilter
                setSearchFilter={setSearchFilter}
                handleFilterChange={handleFilterChange}
              />
              <Table striped size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData &&
                    filteredData.map((item, index) => (
                      <CharacterList key={index} character={item} />
                    ))}
                </tbody>
              </Table>
              <Pagination
                totalItems={data.count}
                itemsPerPage={10}
                currentPage={currentPage}
                onPageChange={(pageNumber) => {
                  setCurrentPage(pageNumber);
                }}
              />
            </>
          ) : (
            <Spinner />
          )}
        </>
      ) : (
        <Alert message={error.message}></Alert>
      )}
    </>
  );
};

export default CharacterWrapper;
