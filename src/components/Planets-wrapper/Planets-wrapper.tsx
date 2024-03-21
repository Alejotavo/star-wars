import { useEffect, useState } from "react";
import { DataPlanets } from "../../Models/planets";
import { fetchDataPlanets } from "../../Services/Services";
import PlanetListItem from "./Planets-list/Planets-list-item";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";

const StarshipsWrapper = () => {
  const [data, setData] = useState<DataPlanets>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchDataPlanets(currentPage)
      .then((response: DataPlanets) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  console.log("lista de Planets", data?.results);

  return (
    <>
      {!error ? (
        <>
          {!isLoading ? (
            <>
              {data ? (
                <>
                  <Table striped size="sm">
                    <thead>
                      <tr>
                        <th>Planets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data?.results.map((item: any, index: number) => (
                          <PlanetListItem planet={item} key={index} />
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
