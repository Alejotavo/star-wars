import { useParams } from "react-router";
import { fetchDataCharacter } from "./../../../Services/Services";
import { useEffect, useState } from "react";
import { Character } from "../../../Models/star-wars";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";

const CharacterDetails = () => {
  const params = useParams<{ id: string }>();
  const characterId = String(params.id);

  const [dataCharacter, setDataCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDataCharacter(characterId)
      .then((response) => {
        setDataCharacter(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }, []);

  console.log(dataCharacter);

  return (
    <>
      {isLoading && <Spinner />}
      <h1>{dataCharacter?.name}</h1>
      <p>{dataCharacter?.eye_color}</p>
      <label>Films:</label>
      {dataCharacter?.films.map((film: string, index: number) => {
        return <div key={index}>{film}</div>;
      })}
      <Link to={"/"}>back</Link>
    </>
  );
};

export default CharacterDetails;
