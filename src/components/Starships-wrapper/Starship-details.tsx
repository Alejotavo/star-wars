import Badge from "react-bootstrap/Badge";

interface StartshipDetailsComponent {
  title?: string;
  manufacturer?: string;
  speed?: string;
}

const StarshipDetails = (props: StartshipDetailsComponent) => {
  return (
    <div>
      <Badge pill bg="info">
        {props.title}
      </Badge>
      <div className="mt-3">
        <span>Manufacturer:</span>
        <label style={{ marginLeft: "0.7rem", color: "#a8a8a8" }}>
          {props.manufacturer}
        </label>
      </div>
      <div className="mt-3">
        <span>Speed:</span>
        {props.speed !== "n/a" ? (
          <label style={{ marginLeft: "0.7rem", color: "#a8a8a8" }}>
            {props.speed}
          </label>
        ) : (
          <Badge pill bg="danger">
            {props.speed}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default StarshipDetails;
