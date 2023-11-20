
export const drawCanvas = (myCanvas: string) => {
    const canvas = document.getElementById(myCanvas);
  
    if (canvas) {
      const ctx = canvas.getContext('2d');
  
      const squareX = 50;
      const squareY = 50;
      const squareSize = 100;
  
      ctx.fillStyle = 'blue';
      ctx.fillRect(squareX, squareY, squareSize, squareSize);
    } else {
      console.error('Canvas element not found.');
    }
  };