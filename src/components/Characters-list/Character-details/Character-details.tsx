import { useParams } from "react-router";
import { fetchDataCharacter } from "./../../../Services/Services";
import { useEffect, useState } from "react";
import { Character } from "../../../Models/star-wars";

const CharacterDetails = () => {
  const params = useParams<{ id: string }>();
  const characterId = String(params.id);
  console.log("params", params, "character Id", characterId);

  const [dataCharacter, setDataCharacter] = useState<Character>();

  useEffect(() => {
    fetchDataCharacter(characterId)
      .then((response) => {
        setDataCharacter(response);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }, []);
  console.log(dataCharacter);
  return <>Details here {dataCharacter?.name}</>;
};

export default CharacterDetails;
