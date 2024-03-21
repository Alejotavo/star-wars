import { useEffect, useState } from "react";
import FilmListItem from "./Films-list/Film-list-item";
import { fetchDataFilms } from "../../Services/Services";
import { DataFilms, Film } from "../../Models/films";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Search from "../Search/Search";

const FilmsWrapper = () => {
  const [data, setData] = useState<DataFilms>({ results: [] });
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [filteredData, setFilteredData] = useState<Film[]>([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchDataFilms()
      .then((response: DataFilms) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("lista de films", data);

  useEffect(() => {
    let filteredResults = data.results;

    // Apply filter by Name
    if (searchFilter) {
      filteredResults = filteredResults.filter((result) =>
        result.title.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    setFilteredData(filteredResults);
  }, [data, searchFilter]);

  return (
    <>
      {!error ? (
        <>
          {!isLoading ? (
            <>
              {data ? (
                <>
                  <Search setSearchFilter={setSearchFilter} />
                  <Table striped size="sm">
                    <thead>
                      <tr>
                        <th>Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData &&
                        filteredData.map((item: any, index: number) => (
                          <FilmListItem movie={item} key={index} />
                        ))}
                    </tbody>
                  </Table>
                </>
              ) : (
                <div>
                  <Spinner />
                </div>
              )}
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

export default FilmsWrapper;
