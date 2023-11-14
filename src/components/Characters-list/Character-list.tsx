import { Character } from "./../../Models/star-wars";

const CharacterList = (props: Character) => {
  const { name } = props;

  return <li>{name}</li>;
};

export default CharacterList;
