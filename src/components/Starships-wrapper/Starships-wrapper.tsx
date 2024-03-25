import { useEffect, useState } from "react";
import StarshipListItem from "./Starships-list/Starships-list-item";
import { fetchDataStarship, fetchDataStarships } from "../../Services/Services";
import { DataStarships, Starship } from "../../Models/starships";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import OffCanvas from "../Off-canvas/Off-canvas";
import StarshipDetails from "./Starship-details";

const StarshipsWrapper = () => {
  const [data, setData] = useState<DataStarships>();
  const [starshipData, setstarshipData] = useState<Starship>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredData, setFilteredData] = useState<Starship[]>([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDataStarships(currentPage)
      .then((response: DataStarships) => {
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
      fetchDataStarship(currentId)
        .then((response: Starship) => {
          console.log("Fetched data:", response);
          setstarshipData(response);
          setIsLoading(false);
          setShow(true);
        })
        .catch((error) => {
          setError(error);
          console.error("Error fetching data:", error);
        });
    }
  }, [currentId]);

  console.log("lista de starship", data);

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
              {data?.results ? (
                <>
                  <Search setSearchFilter={setSearchFilter} />
                  <Table striped size="sm">
                    <thead>
                      <tr>
                        <th>Starships</th>
                        <th>Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData &&
                        filteredData.map((item: any, index: number) => (
                          <StarshipListItem
                            starship={item}
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
                    title={starshipData?.name}
                    body={
                      <StarshipDetails
                        title={starshipData?.name}
                        description={starshipData?.manufacturer}
                      />
                    }
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
