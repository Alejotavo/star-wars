import * as React from "react";
import { useEffect, useState } from "react";

const Films = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/1/")
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((e) => console.log(e.message))
      .finally(() => {});
  }, []);

  console.log("movies", data);
  return <div>Mi FILMS...</div>;
};

export default Films;
