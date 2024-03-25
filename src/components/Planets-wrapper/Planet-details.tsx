import Badge from "react-bootstrap/Badge";

interface PlanetDetailsComponent {
  title?: string;
  climate?: string;
  diameter?: string;
  name?: string;
}

const PlanetDetails = (props: PlanetDetailsComponent) => {
  return (
    <div>
      <h6>Title:</h6>
      <Badge pill bg="info">
        {props.name}
      </Badge>
      <div>
        <h6>Climate:</h6>
        <p className="mt-3">{props.climate}</p>
      </div>
      <div>
        <h6>Diameter:</h6>
        <p className="mt-3">{props.diameter}</p>
      </div>
    </div>
  );
};

export default PlanetDetails;
