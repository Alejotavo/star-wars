import { Button } from "react-bootstrap";
import { Vehicle } from "../../../Models/vehicles";

interface VehicleListItemProps {
  vehicle: Vehicle;
  setCurrentId: (id: number) => void;
  setShow: (show: boolean) => void;
}

const StarshipListItem = (props: VehicleListItemProps) => {
  const getIdFromFilmUrl = (url: string) => {
    let splitted = url.split("/");
    console.log("entra el click", parseInt(splitted[splitted.length - 2]));
    return parseInt(splitted[splitted.length - 2]);
  };

  return (
    <>
      <tr>
        <td>
          <Button
            variant="link"
            onClick={() => {
              props.setCurrentId(getIdFromFilmUrl(props.vehicle.url));
              props.setShow(true);
            }}
          >
            <label>{props.vehicle.name}</label>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default StarshipListItem;
