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
      <div>
        <span>Title:</span>
        <Badge pill bg="info" style={{ marginLeft: "0.7rem" }}>
          {props.name}
        </Badge>
      </div>
      <div className="mt-3">
        <span>Climate:</span>
        <label style={{ marginLeft: "0.7rem", color: "#a8a8a8" }}>
          {props.climate}
        </label>
      </div>
      <div className="mt-3">
        <span>Diameter:</span>
        <label style={{ marginLeft: "0.7rem", color: "#a8a8a8" }}>
          {props.diameter}
        </label>
      </div>
    </div>
  );
};

export default PlanetDetails;
