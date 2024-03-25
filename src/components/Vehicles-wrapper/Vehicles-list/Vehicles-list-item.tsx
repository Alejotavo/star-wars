import { Button } from "react-bootstrap";
import { Vehicle } from "../../../Models/vehicles";

interface VehicleListItemProps {
  vehicle: Vehicle;
}

const StarshipListItem = (props: VehicleListItemProps) => {
  return (
    <>
      <tr>
        <td>
          <Button variant="link">
            <label>{props.vehicle.name}</label>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default StarshipListItem;
