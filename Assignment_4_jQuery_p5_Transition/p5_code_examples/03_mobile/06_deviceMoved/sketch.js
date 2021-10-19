var value = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  setMoveThreshold(10); // number 0 to 100, default 0.5
}

function draw() {
  background(value);
}

function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}