import { Badge, Button } from "react-bootstrap";
import { Vehicle } from "../../../Models/vehicles";

interface VehicleListItemProps {
  vehicle: Vehicle;
  setCurrentId: (id: number) => void;
  setShow: (show: boolean) => void;
}

const VehicleListItem = (props: VehicleListItemProps) => {
  const getIdFromVehicleUrl = (url: string) => {
    let splitted = url.split("/");
    console.log("entra el click", parseInt(splitted[splitted.length - 2]));
    return parseInt(splitted[splitted.length - 2]);
  };

  const handleItemClick = (url: string) => {
    // Get the current view count from local storage
    const viewedItems = JSON.parse(localStorage.getItem("viewedItems") || "{}");
    const viewCount = viewedItems[url] || 0;

    // Increment the view count
    viewedItems[url] = viewCount + 1;

    // Update local storage with the updated view count
    localStorage.setItem("viewedItems", JSON.stringify(viewedItems));
  };

  const viewCount =
    JSON.parse(localStorage.getItem("viewedItems") || "{}")[
      props.vehicle.url
    ] || 0;

  return (
    <>
      <tr>
        <td>
          <Button
            variant="link"
            onClick={() => {
              props.setCurrentId(getIdFromVehicleUrl(props.vehicle.url));
              props.setShow(true);
              handleItemClick(props.vehicle.url);
            }}
          >
            <label>{props.vehicle.name}</label>
          </Button>
        </td>
        <td>
          <Badge>{viewCount}</Badge>
        </td>
      </tr>
    </>
  );
};

export default VehicleListItem;
