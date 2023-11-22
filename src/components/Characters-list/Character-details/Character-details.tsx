import { useParams } from "react-router";

const CharacterDetails = () => {
  const params = useParams<{ character: string }>();

  console.log("id", params);
  return <>Details character</>;
};

export default CharacterDetails;
