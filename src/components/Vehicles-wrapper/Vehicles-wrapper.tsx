import { useEffect, useState } from "react";
import VehicleListItem from "./Vehicles-list/Vehicles-list-item";
import { fetchDataVehicles } from "../../Services/Services";
import { DataVehicles } from "../../Models/vehicles";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";

const StarshipsWrapper = () => {
  const [data, setData] = useState<DataVehicles>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchDataVehicles(currentPage)
      .then((response: DataVehicles) => {
        console.log("Fetched data:", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  console.log("lista de Vehicles", data?.results);

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
                        <th>Vehicles</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data?.results.map((item: any, index: number) => (
                          <VehicleListItem vehicle={item} key={index} />
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
