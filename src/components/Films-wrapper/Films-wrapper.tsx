import { useEffect, useState } from "react";
import FilmListItem from "./Films-list/Film-list-item";
import { fetchDataFilms } from "../../Services/Services";
import { DataFilms } from "../../Models/films";

const FilmsWrapper = () => {
  const [data, setData] = useState<DataFilms>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    //setIsLoading(true);
    fetchDataFilms()
      .then((response: DataFilms) => {
        console.log("Fetched data:", response);
        setData(response);
        //setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("lista de films", data);

  return (
    <>
      hello
      {data ? (
        <table>
          <tbody>
            {data &&
              data.results.map((item: any, index: number) => (
                <FilmListItem movie={item} key={index} />
              ))}
          </tbody>
        </table>
      ) : (
        <div>errorrr</div>
      )}
    </>
  );
};

export default FilmsWrapper;
