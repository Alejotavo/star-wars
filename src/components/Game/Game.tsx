import { Col, Row } from "react-bootstrap";

const Game = () => {
  const canvasStyle = {
    backgroundColor: "#e6e6e6",
  };
  return (
    <div>
      <Row>
        <Col className="my-3 mx-3">
          <canvas width={400} height={200} style={canvasStyle}></canvas>
        </Col>
      </Row>
    </div>
  );
};

export default Game;
