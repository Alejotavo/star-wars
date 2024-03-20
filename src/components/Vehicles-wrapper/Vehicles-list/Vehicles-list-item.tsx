import { Vehicle } from "../../../Models/vehicles";

interface VehicleListItemProps {
  vehicle: Vehicle;
}

const StarshipListItem = (props: VehicleListItemProps) => {
  return (
    <>
      <tr>
        <td>
          <label>{props.vehicle.name}</label>
        </td>
      </tr>
    </>
  );
};

export default StarshipListItem;
