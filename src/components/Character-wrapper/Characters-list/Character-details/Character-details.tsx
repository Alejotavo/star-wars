import { useParams } from "react-router";
import {
  fetchDataCharacter,
  fetchDataFilmFromSpecificCharacter,
  fetchDataFilms,
} from "../../../../Services/Services";
import { useEffect, useState } from "react";
import { Character } from "../../../../Models/star-wars";
import Spinner from "../../../Spinner/Spinner";
import { Link } from "react-router-dom";
import CharacterModal from "./Character-modal/Character-modal";
import { Button } from "react-bootstrap";

const CharacterDetails = () => {
  const params = useParams<{ id: string }>();
  const characterId = String(params.id);

  const [dataCharacter, setDataCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState<Film[]>([]);

  interface Film {
    title: string;
    director: string;
    release_date: string;
    url: string;
  }

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

  useEffect(() => {
    const urls = dataCharacter?.films;

    if (!urls) {
      console.error("URLs are undefined");
      return;
    }

    Promise.all(urls.map((url) => fetch(url)))
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => setFilms(data))
      .catch((error) => console.error("Error fetching films:", error));
  }, [dataCharacter]);

  console.log("films", films);
  console.log("Data off FILMS from this character:", dataCharacter?.films);

  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      {isLoading && <Spinner />}
      <h1>{dataCharacter?.name}</h1>
      <label>Films:</label>
      {films?.map((film, index: number) => {
        return <div key={index}>{film.title}</div>;
      })}
      <Link to={"/"}>back</Link>
      <Button variant="primary" onClick={handleModalOpen}>
        Character details
      </Button>
      <CharacterModal
        eyes={dataCharacter?.eye_color ?? "Unknown"}
        gender={dataCharacter?.gender ?? "Unknown"}
        name={dataCharacter?.name ?? "Unknow"}
        birth_year={dataCharacter?.birth_year ?? "Unknow"}
        hair_color={dataCharacter?.hair_color ?? "Unknow"}
        show={showModal}
        handleClose={handleModalClose}
      />
    </>
  );
};

export default CharacterDetails;
