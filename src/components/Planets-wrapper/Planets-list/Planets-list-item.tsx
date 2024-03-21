import { Planet } from "../../../Models/planets";

interface PlanetistItemProps {
  planet: Planet;
}

const PlanetListItem = (props: PlanetistItemProps) => {
  return (
    <>
      <tr>
        <td>
          <label>{props.planet.name}</label>
        </td>
      </tr>
    </>
  );
};

export default PlanetListItem;
