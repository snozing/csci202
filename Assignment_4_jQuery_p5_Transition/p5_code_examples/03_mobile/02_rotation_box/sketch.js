function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background('magenta');
  rotateX(rotationX*0.03);
  rotateY(rotationY*0.03);
  rotateZ(rotationZ*0.03);
  box(200, 200, 200);
}
