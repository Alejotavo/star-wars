import { Link } from "react-router-dom";
import { Character } from "../../../Models/star-wars";

const CharacterList = (props: { character: Character }) => {
  const getIdFromCharacterUrl = (url: string) => {
    let splitted = url.split("/");
    return splitted[splitted.length - 2];
  };
  return (
    <>
      <tr>
        <td>
          <Link to={"/character/" + getIdFromCharacterUrl(props.character.url)}>
            {props.character.name}
          </Link>
        </td>
        <td>
          <label>{props.character.gender}</label>
        </td>
      </tr>
    </>
  );
};

export default CharacterList;
