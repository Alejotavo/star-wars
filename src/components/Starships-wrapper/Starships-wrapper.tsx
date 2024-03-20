import { useEffect, useState } from "react";
import StarshipListItem from "./Starships-list/Starships-list-item";
import { fetchDataStarships } from "../../Services/Services";
import { DataStarships } from "../../Models/starships";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";

const StarshipsWrapper = () => {
  const [data, setData] = useState<DataStarships>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDataStarships()
      .then((response: DataStarships) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("lista de starship", data?.results);

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
                      <th>Starships</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data?.results.map((item: any, index: number) => (
                        <StarshipListItem starship={item} key={index} />
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

export default StarshipsWrapper;
