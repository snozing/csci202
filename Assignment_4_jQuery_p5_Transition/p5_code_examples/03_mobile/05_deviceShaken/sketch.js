var value = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(50); // number 0 to 100, default 30
}

function draw() {
  background(value);
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}