import { Starship } from "../../../Models/starships";

interface StarshipListItemProps {
  starship: Starship;
}

const StarshipListItem = (props: StarshipListItemProps) => {
  return (
    <>
      <tr>
        <td>
          <label>{props.starship.name}</label>
        </td>
      </tr>
    </>
  );
};

export default StarshipListItem;
