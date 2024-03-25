import { Button } from "react-bootstrap";
import { Starship } from "../../../Models/starships";

interface StarshipListItemProps {
  starship: Starship;
  setCurrentId: (id: number) => void;
  setShow: (show: boolean) => void;
}

const StarshipListItem = (props: StarshipListItemProps) => {
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
              props.setCurrentId(getIdFromFilmUrl(props.starship.url));
              props.setShow(true);
            }}
          >
            {props.starship.name}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default StarshipListItem;
