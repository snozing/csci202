var capture;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  var constraints = { video: { facingMode: "environment" } };
  capture = createCapture(constraints);
  capture.elt.setAttribute('playsinline', true);
  capture.elt.setAttribute('autoplay', true);
  capture.hide();
}


function draw() {
  if (capture) {
    image(capture, 0, 0, width, width * capture.height/capture.width);
    ellipse(random(width), random(height), 50, 50);
  }
}


