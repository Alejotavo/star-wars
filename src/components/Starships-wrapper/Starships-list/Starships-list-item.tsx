import { Button } from "react-bootstrap";
import { Starship } from "../../../Models/starships";

interface StarshipListItemProps {
  starship: Starship;
}

const StarshipListItem = (props: StarshipListItemProps) => {
  return (
    <>
      <tr>
        <td>
          <Button variant="link">{props.starship.name}</Button>
        </td>
      </tr>
    </>
  );
};

export default StarshipListItem;
