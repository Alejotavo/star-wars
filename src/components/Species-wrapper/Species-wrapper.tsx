import { useEffect, useState } from "react";
import SpecieListItem from "./Species-list/Species-list-item";
import { fetchDataSpecies } from "../../Services/Services";
import { DataSpecies } from "../../Models/species";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";

const SpeciesWrapper = () => {
  const [data, setData] = useState<DataSpecies>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchDataSpecies(currentPage)
      .then((response: DataSpecies) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  console.log("lista de SPECIES", data?.results);

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
                        <th>Species</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data?.results.map((item: any, index: number) => (
                          <SpecieListItem specie={item} key={index} />
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

export default SpeciesWrapper;
