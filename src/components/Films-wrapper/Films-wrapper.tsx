import { useEffect, useState } from "react";
import FilmListItem from "./Films-list/Film-list-item";
import { fetchDataFilms } from "../../Services/Services";
import { DataFilms } from "../../Models/films";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";

const FilmsWrapper = () => {
  const [data, setData] = useState<DataFilms>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      {!error ? (
        <>
          {!isLoading ? (
            <>
              {data ? (
                <Table striped size="sm">
                  <thead>
                    <tr>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.results.map((item: any, index: number) => (
                        <FilmListItem movie={item} key={index} />
                      ))}
                  </tbody>
                </Table>
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
