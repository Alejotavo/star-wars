
export const drawCanvas = (myCanvas: string) => {
    const canvas = document.getElementById(myCanvas);
  
    if (canvas && canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');
  
      let squareX = 50;
      let squareY = 50;
      const squareSize = 50;
      
      // Dibujar el cuadrado en el canvas
      function drawSquare() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
        ctx.fillStyle = 'red';
        ctx.fillRect(squareX, squareY, squareSize, squareSize);
      }

      function moveSquare(event) {
        const speed = 5; // Velocidad de movimiento
      
        switch (event.keyCode) {
          case 37: // Flecha izquierda
            squareX -= speed;
            break;
          case 38: // Flecha arriba
            squareY -= speed;
            break;
          case 39: // Flecha derecha
            squareX += speed;
            break;
          case 40: // Flecha abajo
            squareY += speed;
            break;
        }
      
        drawSquare(); // Volver a dibujar el cuadrado después de cambiar las coordenadas
      }

      document.addEventListener('keydown', moveSquare);


// Dibujar el cuadrado inicial
drawSquare();





    } else {
      console.error('Canvas element');
    }
  };