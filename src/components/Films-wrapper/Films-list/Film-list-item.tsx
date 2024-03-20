import { Film } from "../../../Models/films";

interface FilmListItemProps {
  movie: Film;
}

const FilmListItem = (props: FilmListItemProps) => {
  return (
    <>
      <tr>
        <td>
          <label>{props.movie.title}</label>
        </td>
      </tr>
    </>
  );
};

export default FilmListItem;
