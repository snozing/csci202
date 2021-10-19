function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(40);
}

function draw() {
  background(255);
  text("rotationX = "+round(rotationX), 20, 50);
  text("rotationY = "+round(rotationY), 20, 150);
  text("rotationZ = "+round(rotationZ), 20, 250);
}
