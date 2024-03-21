import { useEffect, useState } from "react";
import FilmListItem from "./Films-list/Film-list-item";
import { fetchDataFilm, fetchDataFilms } from "../../Services/Services";
import { DataFilms, Film } from "../../Models/films";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Search from "../Search/Search";
import OffCanvas from "../Off-canvas/Off-canvas";

const FilmsWrapper = () => {
  const [data, setData] = useState<DataFilms>({ results: [] });
  const [filmData, setFilmData] = useState<Film>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<Film[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    if (currentId) {
      setIsLoading(true);
      fetchDataFilm(currentId)
        .then((response: Film) => {
          console.log("Fetched data:", response);
          setFilmData(response);
          setIsLoading(false);
          setShow(true);
        })
        .catch((error) => {
          setError(error);
          console.error("Error fetching data:", error);
        });
    }
  }, [currentId]);

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

  console.log("current ID", currentId);

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
                          <FilmListItem
                            setCurrentId={(id: number | null) =>
                              setCurrentId(id)
                            }
                            movie={item}
                            key={index}
                          />
                        ))}
                    </tbody>
                  </Table>
                  <OffCanvas
                    onClose={() => {
                      setShow(false);
                      setFilteredData(data.results);
                    }}
                    show={show}
                    title={filmData?.title}
                    body={filmData?.opening_crawl}
                  />
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
