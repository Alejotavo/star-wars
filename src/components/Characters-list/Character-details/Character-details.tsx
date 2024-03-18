import { useParams } from "react-router";
import { fetchDataCharacter } from "./../../../Services/Services";
import { useEffect, useState } from "react";
import { Character } from "../../../Models/star-wars";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";
import CharacterModal from "./Character-modal/Character-modal";
import { Button } from "react-bootstrap";

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

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      {isLoading && <Spinner />}
      <h1>{dataCharacter?.name}</h1>
      <label>Films:</label>
      {dataCharacter?.films?.map((film, index: number) => {
        return <div key={index}>{film}</div>;
      })}
      <Link to={"/"}>back</Link>
      <Button variant="primary" onClick={handleModalOpen}>
        Character details
      </Button>
      <CharacterModal
        eyes={dataCharacter?.eye_color ?? "Unknown"}
        gender={dataCharacter?.gender ?? "Unknown"}
        name={dataCharacter?.name ?? "Unknow"}
        show={showModal}
        handleClose={handleModalClose}
      />
    </>
  );
};

export default CharacterDetails;
