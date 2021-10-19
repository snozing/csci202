// this one asks for location update at regular interval

function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  if (!navigator.geolocation) {
    alert("this device does not support geolocation");
  } else {
    setInterval(function() {
      navigator.geolocation.getCurrentPosition(updatePosition);
    }, 1000); // ask every 1000 milliseconds, or every 1 second
  }
}

function updatePosition(position) {
  background(255);
  text("latitude = "+nf(position.coords.latitude, 2, 6), 20, 50);
  text("longitude = "+nf(position.coords.longitude, 3, 6), 20, 150);
}