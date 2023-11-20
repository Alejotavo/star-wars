import { useEffect } from "react";
import { drawCanvas } from "./Canvas";

const Game = () => {
  useEffect(() => {
    drawCanvas();
  }, []);

  const canvasStyle = {
    backgroundColor: "#e6e6e6",
  };
  return (
    <canvas id="myCanvas" width={400} height={200} style={canvasStyle}></canvas>
  );
};

export default Game;
