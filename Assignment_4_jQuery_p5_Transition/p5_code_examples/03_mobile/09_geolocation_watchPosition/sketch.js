// this one waits for significant location changes

function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  if (!navigator.geolocation) {
    alert("this device does not support geolocation");
  } else {
    navigator.geolocation.watchPosition(updatePosition);
    console.log('ok')
  }
}

function updatePosition(position) {
  background(255);
  text("latitude = "+nf(position.coords.latitude, 2, 6), 20, 50);
  text("longitude = "+nf(position.coords.longitude, 3, 6), 20, 150);
}