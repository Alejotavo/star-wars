import { useEffect, useState } from "react";
import SpecieListItem from "./Species-list/Species-list-item";
import { fetchDataSpecie, fetchDataSpecies } from "../../Services/Services";
import { DataSpecies, Specie } from "../../Models/species";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/alert";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";
import OffCanvas from "../Off-canvas/Off-canvas";
import Search from "../Search/Search";

const SpeciesWrapper = () => {
  const [data, setData] = useState<DataSpecies>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [specieData, setSpecieData] = useState<Specie>();
  const [filteredData, setFilteredData] = useState<Specie[]>([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

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

  useEffect(() => {
    if (currentId) {
      setIsLoading(true);
      fetchDataSpecie(currentId)
        .then((response: Specie) => {
          console.log("Fetched data:", response);
          setSpecieData(response);
          setIsLoading(false);
          setShow(true);
        })
        .catch((error) => {
          setError(error);
          console.error("Error fetching data:", error);
        });
    }
  }, [currentId]);

  console.log("lista de SPECIES", data?.results);

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
                        <th>Species</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData &&
                        filteredData.map((item: any, index: number) => (
                          <SpecieListItem
                            specie={item}
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
                    title={specieData?.name}
                    body={specieData?.classification}
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
