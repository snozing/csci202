var sound;

function preload() {
  sound = loadSound("beat.mp3");  
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  sound.setVolume(mouseX/width);
}

// sounds must start with user gesture
function mousePressed() {
  sound.play();
}