import Badge from "react-bootstrap/Badge";

interface StartshipDetailsComponent {
  title?: string;
  description?: any;
}

const StarshipDetails = (props: StartshipDetailsComponent) => {
  return (
    <div>
      <Badge pill bg="info">
        {props.title}
      </Badge>
      <p className="mt-3">{props.description}</p>
    </div>
  );
};

export default StarshipDetails;
