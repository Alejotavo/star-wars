import Offcanvas from "react-bootstrap/Offcanvas";

interface OffCanvasProps {
  title?: string;
  body?: any;
  show: boolean;
  onClose: () => void;
}

const OffCanvas = (props: OffCanvasProps) => {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.onClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.body}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
