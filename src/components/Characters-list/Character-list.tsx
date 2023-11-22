import { Link } from "react-router-dom";
import { Character } from "../../Models/star-wars";

const CharacterList = (props: { index: number; character: Character }) => {
  return (
    <>
      <tr>
        <td>
          <Link to={"/character/" + (props.index + 1)}>
            {props.character.name}
          </Link>
        </td>
        <td>
          <label>{props.character.eye_color}</label>
        </td>
      </tr>
    </>
  );
};

export default CharacterList;
