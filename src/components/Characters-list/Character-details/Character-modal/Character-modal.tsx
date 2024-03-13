import { Button, Modal } from "react-bootstrap";

interface CharacterModalProps {
  show: boolean;
  handleClose: () => void;
  name: string;
  eyes: string;
  gender: string;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  show,
  handleClose,
  name,
  eyes,
  gender,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Eyes color:</label>
          <p>{eyes}</p>
        </div>
        <div>
          <label>Gender:</label>
          <p>{gender}</p>
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
