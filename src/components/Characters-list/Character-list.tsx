import { Character } from "../../Models/star-wars";

const CharacterList = (props: Character) => {
  return (
    <li>
      <div>
        <h4> NAME</h4>
        <p>{props.name}</p>
      </div>
      <div>
        <h4>GENDER</h4>
        <label
          style={{
            color:
              props.gender === "male"
                ? "blue"
                : props.gender === "female"
                ? "pink"
                : "black",
          }}
        >
          {props.gender}
        </label>
      </div>
    </li>
  );
};

export default CharacterList;
