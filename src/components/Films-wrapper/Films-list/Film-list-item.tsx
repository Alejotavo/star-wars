import { Button } from "react-bootstrap";
import { Film } from "../../../Models/films";

interface FilmListItemProps {
  movie: Film;
  setCurrentId: (id: number) => void;
}

const FilmListItem = (props: FilmListItemProps) => {
  const getIdFromFilmUrl = (url: string) => {
    console.log("URL", url);
    let splitted = url.split("/");
    console.log("ID", splitted[splitted.length - 2]);
    return parseInt(splitted[splitted.length - 2]);
  };

  return (
    <>
      <tr>
        <td>
          <Button
            onClick={() => {
              props.setCurrentId(getIdFromFilmUrl(props.movie.url));
            }}
          >
            {props.movie.title}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default FilmListItem;
