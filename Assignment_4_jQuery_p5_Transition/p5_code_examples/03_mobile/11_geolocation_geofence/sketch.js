// using the p5.geolocation library info here: https://github.com/bmoren/p5.geolocation

var fence;
function setup(){
  createCanvas(windowWidth, windowHeight);
	fence = new geoFenceCircle(44.979779, -93.325499, 0.05, insideTheFence, outsideTheFence, 'mi')
}

function insideTheFence(position){
  print("INlat: " + position.latitude);
  print("INlong: " + position.longitude);
  print("user is inside of the fence");
  background("red");
  text("WELCOME!", 50, 50);
}

function outsideTheFence(position){
  print("OUTlat: " + position.latitude);
  print("OUTlong: " + position.longitude);
  print("user is outside of the fence");
  background("cyan");
  text("OUT!", 50, 50);
}

function mousePressed() {
  fence.clear();
}