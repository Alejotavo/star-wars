import { useEffect, useState } from "react";
import VehicleListItem from "./Vehicles-list/Vehicles-list-item";
import { fetchDataVehicle, fetchDataVehicles } from "../../Services/Services";
import { DataVehicles, Vehicle } from "../../Models/vehicles";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import OffCanvas from "../Off-canvas/Off-canvas";

const StarshipsWrapper = () => {
  const [data, setData] = useState<DataVehicles>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredData, setFilteredData] = useState<Vehicle[]>([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [vehicleData, setVehicleData] = useState<Vehicle>();
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    if (currentId) {
      setIsLoading(true);
      fetchDataVehicle(currentId)
        .then((response: Vehicle) => {
          console.log("Fetched data:", response);
          setVehicleData(response);
          setIsLoading(false);
          setShow(true);
        })
        .catch((error) => {
          setError(error);
          console.error("Error fetching data:", error);
        });
    }
  }, [currentId]);

  console.log("lista de Vehicles", data?.results);

  useEffect(() => {
    let filteredResults = data?.results;

    // Apply filter by Name
    if (searchFilter && data?.results) {
      filteredResults = data.results.filter((result) =>
        result.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    setFilteredData(filteredResults ?? []);
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
                        <th>Vehicles</th>
                        <th>Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData &&
                        filteredData.map((item: any, index: number) => (
                          <VehicleListItem
                            vehicle={item}
                            key={index}
                            setCurrentId={(id: number | null) =>
                              setCurrentId(id)
                            }
                            setShow={(show: boolean) => setShow(show)}
                          />
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
                  <OffCanvas
                    onClose={() => {
                      setShow(false);
                    }}
                    show={show}
                    title={vehicleData?.name}
                    body={vehicleData?.manufacturer}
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
