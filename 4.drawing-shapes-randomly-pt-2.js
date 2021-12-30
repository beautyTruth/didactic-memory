// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

// ---------------------------------------------Drawing Lines Randomly
// Example 4 -> randomizing the lines location

// for (let i = 0; i < 20; i++) {
//   let XStart = Math.random() * window.innerWidth;
//   let YStart = Math.random() * window.innerHeight;

//   let XEnd = Math.random() * window.innerWidth;
//   let YEnd = Math.random() * window.innerHeight;

//   canvasContext.beginPath();
//   canvasContext.moveTo(XStart, YStart);
//   canvasContext.lineTo(XEnd, YEnd);
//   canvasContext.strokeStyle = "white";
//   canvasContext.stroke();
// }

// ------------------------------------------------------------------------

// ---------------------------------------------Drawing Arcs Randomly
// Example 5 -> randomizing the arcs location

// for (let i = 0; i < 20; i++) {
//   let XStart = Math.random() * window.innerWidth;
//   let YStart = Math.random() * window.innerHeight;

//   let radius = (Math.random() * window.innerWidth) / 10;

//   canvasContext.beginPath();
//   canvasContext.arc(XStart, YStart, radius, 0, Math.PI);
//   canvasContext.strokeStyle = "green";
//   canvasContext.stroke();
// }

// ------------------------------------------------------------------------

// ---------------------------------------------Drawing Circles Randomly
// Example 6 -> randomizing the circles location + color

// for (let i = 0; i < 20; i++) {
//   let XStart = Math.random() * window.innerWidth;
//   let YStart = Math.random() * window.innerHeight;

//   let radius = (Math.random() * window.innerWidth) / 10;

//   canvasContext.beginPath();
//   canvasContext.arc(XStart, YStart, radius, 0, Math.PI * 2);
//   canvasContext.strokeStyle = "green";
//   canvasContext.stroke();
// }

// ------------------------------------------------------------------------

// today is a good day to have a good day

// growth is painful. Change is Painful. But nothing is a painful as staying stuck somewhere where you don't belong

// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

const canvasEl = document.querySelector("canvas");
const canvasCTX = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

// -=-=-=-=-=-=--=-=-=-=-=-=-=-=- drawing lines randomly -=-=-=-=-=-=-=-=-=-=-=-=-
for (let i = 0; i < 20; i++) {
  let xStart = Math.random() * window.innerWidth;
  let yStart = Math.random() * window.innerHeight;

  let xEnd = Math.random() * window.innerWidth;
  let yEnd = Math.random() * window.innerHeight;

  canvasCTX.beginPath();
  canvasCTX.moveTo(xStart, yStart);
  canvasCTX.lineTo(xEnd, yEnd);
  canvasCTX.strokeStyle = "fuchsia";
  canvasCTX.lineWidth = 10;
  canvasCTX.stroke();
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= drawing arcs randomly -=-=-=-=-=-=-=-=-=-=-=-=-=

for (let j = 0; j < 20; j++) {
  let xStart = Math.random() * window.innerWidth;
  let yStart = Math.random() * window.innerHeight;

  let radius = (Math.random() * window.innerWidth) / 10;

  canvasCTX.beginPath();
  canvasCTX.arc(xStart, yStart, radius, 0, Math.PI);
  canvasCTX.strokeStyle = "peachpuff";
  canvasCTX.lineWidth = 25;
  canvasCTX.stroke();
}

// =-=-=-=-=-=-=-=-=-=-=-=-=--=-=- randomizing circles location and color -=-=-=-=-=-

for (let j = 0; j < 20; j++) {
  let xStart = Math.random() * window.innerWidth;
  let yStart = Math.random() * window.innerHeight;

  let radius = (Math.random() * window.innerWidth) / 10;

  canvasCTX.beginPath();
  canvasCTX.arc(xStart, yStart, radius, 0, Math.PI * 2);
  canvasCTX.strokeStyle = "lime";
  canvasCTX.lineWidth = 25;
  canvasCTX.stroke();
}
