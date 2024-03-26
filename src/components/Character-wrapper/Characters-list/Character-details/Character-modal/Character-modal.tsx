import { Badge, Button, Modal } from "react-bootstrap";

interface CharacterModalProps {
  show: boolean;
  handleClose: () => void;
  name: string;
  eyes: string;
  gender: string;
  hair_color: string;
  birth_year: string;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  show,
  handleClose,
  name,
  eyes,
  gender,
  hair_color,
  birth_year,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Eyes color:</label>
          <Badge>{eyes}</Badge>
        </div>
        <div>
          <label>Gender:</label>
          <Badge>{gender}</Badge>
        </div>
        <div>
          <label>Hair Color:</label>
          <Badge>{hair_color}</Badge>
        </div>
        <div>
          <label>Birth:</label>
          <Badge>{birth_year}</Badge>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterModal;
