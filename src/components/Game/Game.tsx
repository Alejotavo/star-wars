import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { drawCanvas } from "./Canvas";

const Game = () => {
  useEffect(() => {
    drawCanvas("myCanvas");
  }, []);

  const canvasStyle = {
    backgroundColor: "#e6e6e6",
  };
  return (
    <div>
      <Row>
        <Col className="my-3 mx-3">
          <canvas
            id="myCanvas"
            width={400}
            height={200}
            style={canvasStyle}
          ></canvas>
        </Col>
      </Row>
    </div>
  );
};

export default Game;
