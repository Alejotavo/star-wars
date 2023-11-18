import { Character } from "../../Models/star-wars";

const CharacterList = (props: Character) => {
  return (
    <tr>
      <td>
        <p>{props.name}</p>
      </td>
      <td>
        <label>{props.gender}</label>
      </td>
    </tr>
  );
};

export default CharacterList;
