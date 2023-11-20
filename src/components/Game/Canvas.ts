
export const drawCanvas = (myCanvas: string) => {
    const canvas = document.getElementById(myCanvas);
  
    if (canvas && canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');
  
      if (ctx) {
        const squareX = 50;
        const squareY = 50;
        const squareSize = 50;
  
        ctx.fillStyle = 'blue';
        ctx.fillRect(squareX, squareY, squareSize, squareSize);
      } else {
        console.error('Canvas context not supported.');
      }
    } else {
      console.error('Canvas element');
    }
  };