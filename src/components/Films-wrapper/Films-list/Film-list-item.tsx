import { Button } from "react-bootstrap";
import { Film } from "../../../Models/films";

interface FilmListItemProps {
  movie: Film;
  setCurrentId: (id: number) => void;
  setShow: (show: boolean) => void;
}

const FilmListItem = (props: FilmListItemProps) => {
  const getIdFromFilmUrl = (url: string) => {
    let splitted = url.split("/");
    console.log("entra el click", parseInt(splitted[splitted.length - 2]));
    return parseInt(splitted[splitted.length - 2]);
  };

  return (
    <>
      <tr>
        <td>
          <Button
            variant="link"
            onClick={() => {
              props.setCurrentId(getIdFromFilmUrl(props.movie.url));
              props.setShow(true);
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
