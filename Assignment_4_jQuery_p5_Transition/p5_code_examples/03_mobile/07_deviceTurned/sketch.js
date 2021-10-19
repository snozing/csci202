var value = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(value);
}
function deviceTurned() {
  if (value == 0){
    value = 255
  } else if (value == 255) {
    value = 0;
  }
}