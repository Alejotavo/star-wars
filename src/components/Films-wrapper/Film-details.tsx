import Badge from "react-bootstrap/Badge";

interface FilmDetailsComponent {
  title?: string;
  description?: any;
}

const FilmDetails = (props: FilmDetailsComponent) => {
  return (
    <div>
      <Badge pill bg="info">
        {props.title}
      </Badge>
      <p className="mt-3">{props.description}</p>
    </div>
  );
};

export default FilmDetails;
