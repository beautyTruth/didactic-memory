// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

// ----------------------------------------------------------------Drawing Rectangles/Squares Randomly

// Example 1 -> randomizing the location

// for (let i = 1; i < 11; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   canvasContext.fillStyle = "fuchsia";
//   canvasContext.fillRect(x, y, 50, 50);
// }
// -------------------------------------------------------------

// Example 2 -> randomizing the location + color

// for (let i = 1; i < 21; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);

//   canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;
//   canvasContext.fillRect(x, y, 50, 50);
// }
// -------------------------------------------------------------

// Example 3 -> randomizing the location + color + size

// for (let i = 1; i < 21; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);

//   let width = Math.random() * 200;
//   let height = Math.random() * 200;

//   canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;
//   canvasContext.fillRect(x, y, width, height);
// }
// -------------------------------------------------------------

// it's a good day to have a good day

/*
my code below
*/

// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

const canvasEl = document.querySelector("canvas");
const canvasCTX = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= drawing rectangles and squares randomly =-=-=-=-=-=-=-=-=-=-=-=-=-=-

// here, we randomize the location

// for (let i = 1; i < 11; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   canvasCTX.fillStyle = "cyan";
//   canvasCTX.fillRect(x, y, 50, 50);
// }

// =-=-=-=-=-=-=-=-=-=-=-=- randomization of the color and the location =-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// for (let i = 1; i < 30; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);

//   canvasCTX.fillStyle = `rgb(${red}, ${green}, ${blue})`;
//   canvasCTX.fillRect(x, y, 50, 50);
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= randomization of the color, location, and size =-=-=-=-=-=-=

for (let i = 1; i < 30; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  let red = Math.ceil(Math.random() * 255);
  let green = Math.ceil(Math.random() * 255);
  let blue = Math.ceil(Math.random() * 255);

  let width = Math.random() * 200;
  let height = Math.random() * 200;

  canvasCTX.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  canvasCTX.fillRect(x, y, width, height);
}
