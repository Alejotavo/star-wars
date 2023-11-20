import { SetStateAction, useEffect, useState } from "react";
import CharacterList from "../Characters-list/Character-list";
import HeaderFilter from "../Header-filter/Header-filter";
import { Character, Data } from "./../../Models/star-wars";
import Spinner from "../Spinner/Spinner";
import "./Character-wrapper.scss";
import Table from "react-bootstrap/Table";

import { fetchData } from "./../../Services/Services";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const CharacterWrapper = () => {
  const [data, setData] = useState<Data>({ results: [] });
  const [filteredData, setFilteredData] = useState<Character[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [dropdownFilter, setDropdownFilter] = useState("");

  const handleFilterChange = (gender: SetStateAction<string>) => {
    setDropdownFilter(gender);
    console.log("Dropdown value", dropdownFilter);
  };

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
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Row>
            <Col className="my-3 mx-3">
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
                      <CharacterList
                        key={index}
                        name={item.name}
                        gender={item.gender}
                      />
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default CharacterWrapper;
