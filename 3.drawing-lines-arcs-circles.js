// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

// --------------------------------------Drawing Lines
// canvasContext.beginPath();
// canvasContext.moveTo(250, 250);
// canvasContext.lineTo(400, 350); // line 1
// canvasContext.lineTo(600, 150); // line 2
// canvasContext.lineTo(700, 450); // line 3
// canvasContext.lineTo(1000, 50); // line 4
// canvasContext.lineTo(1500, 250); // line 5
// canvasContext.lineTo(1500, 650); // line 6
// canvasContext.lineTo(250, 650); // line 6
// canvasContext.lineTo(250, 250); // line 8
// canvasContext.strokeStyle = "white";
// canvasContext.stroke();

// --------------------------------------Drawing Arcs
// https://www.mathsisfun.com/geometry/radians.html

// canvasContext.beginPath();
// canvasContext.arc(750, 350, 50, 0, Math.PI);
// canvasContext.stroke();

// --------------------------------------Drawing Circles

// canvasContext.beginPath();
// canvasContext.arc(1200, 200, 50, 0, Math.PI * 2);
// canvasContext.stroke();

// canvasContext.beginPath();
// canvasContext.arc(200, 300, 50, 0, Math.PI * 2);
// canvasContext.stroke();

// canvasContext.beginPath();
// canvasContext.arc(400, 400, 50, 0, Math.PI * 2);
// canvasContext.stroke();

// canvasContext.beginPath();
// canvasContext.arc(600, 500, 50, 0, Math.PI * 2);
// canvasContext.stroke();

// canvasContext.beginPath();
// canvasContext.arc(800, 600, 50, 0, Math.PI * 2);
// canvasContext.stroke();

// it is a good day to have a good day

/*
my code below 
*/

const canvasEl = document.querySelector("canvas");
const canvasCTX = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

//=-=-=-=-=-=-=-==-=-=-=-=-=-=-=- drawing lines =-=-=-=-=-=-=-=-=-=-=-=-=

canvasCTX.beginPath();
canvasCTX.moveTo(150, 150);
canvasCTX.lineTo(400, 400);
canvasCTX.lineTo(150, 600);
canvasCTX.lineTo(600, 600);
canvasCTX.lineTo(1000, 800);
canvasCTX.lineTo(1000, 150);
canvasCTX.lineTo(650, 250);
canvasCTX.lineTo(150, 150);
canvasCTX.strokeStyle = "black";
canvasCTX.lineWidth = 10;
canvasCTX.stroke();

//=-=-=-=-=-=-=-==-=-=-=-=-=-=-=- drawing arcs =-=-=-=-=-=-=-=-=-=-=-=-=
// https://www.mathsisfun.com/geometry/radians.html

canvasCTX.beginPath();
canvasCTX.arc(850, 350, 70, 0.5, Math.PI);
canvasCTX.stroke();

//=-=-=-=-=-=-=-==-=-=-=-=-=-=-=- drawing circles =-=-=-=-=-=-=-=-=-=-=-=-=

canvasCTX.beginPath();
canvasCTX.arc(500, 150, 50, 0, 2 * Math.PI);
canvasCTX.stroke();

canvasCTX.beginPath();
canvasCTX.arc(950, 650, 50, 0, 2 * Math.PI);
canvasCTX.stroke();

canvasCTX.beginPath();
canvasCTX.arc(850, 350, 50, 0, 2 * Math.PI);
canvasCTX.stroke();

canvasCTX.beginPath();
canvasCTX.arc(500, 600, 50, 0, 2 * Math.PI);
canvasCTX.stroke();

canvasCTX.beginPath();
canvasCTX.arc(700, 400, 50, 0, 2 * Math.PI);
canvasCTX.stroke();
