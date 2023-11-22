
export const drawCanvas = () => {

  const canvas: HTMLCanvasElement | null = document.getElementById('myCanvas') as HTMLCanvasElement | null;

    if (canvas && canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');
  
     
      const squareSize = 50;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      let squareX = (canvasWidth - squareSize) / 2;
    let squareY = (canvasHeight - squareSize) / 2;

    let speedX = 0;
    let speedY = 0;
      
      // Dibujar el cuadrado en el canvas
      function drawSquare() {
        if (ctx) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.fillStyle = 'blue';
          ctx.fillRect(squareX, squareY, squareSize, squareSize);
        }
      }

      function moveSquare() {
        squareX += speedX;
        squareY += speedY;
      
        if (squareX < 0) {
          squareX = 0;
        } else if (squareX + squareSize > canvasWidth) {
          squareX = canvasWidth - squareSize;
        }
  
        if (squareY < 0) {
          squareY = 0;
        } else if (squareY + squareSize > canvasHeight) {
          squareY = canvasHeight - squareSize;
        }
      
        drawSquare(); // Volver a dibujar el cuadrado después de cambiar las coordenadas
        requestAnimationFrame(moveSquare);
      }

      document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
          case 37: // Flecha izquierda
            speedX = -5;
            speedY = 0;
            break;
          case 38: // Flecha arriba
            speedX = 0;
            speedY = -5;
            break;
          case 39: // Flecha derecha
            speedX = 5;
            speedY = 0;
            break;
          case 40: // Flecha abajo
            speedX = 0;
            speedY = 5;
            break;
        }
      });

      document.addEventListener('keyup', () => {
        speedX = 0;
        speedY = 0;
      });

      moveSquare(); // Iniciar el movimiento





    } else {
      console.error('Canvas element');
    }
  };