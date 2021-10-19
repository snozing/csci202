// using the p5.geolocation library info here: https://github.com/bmoren/p5.geolocation

var fence;

var targetLat = 44.979779;
var targetLon = -93.325499;


function setup(){
  createCanvas(windowWidth, windowHeight);
  watchPosition(positionUpdated);
}

function positionUpdated(pos) {
	var distance = calcGeoDistance(pos.latitude, pos.longitude, targetLat, targetLon, 'mi');
  console.log("you are "+distance+" miles from target");
  
  if (distance < .01) {
    text("YOU ARE GETTING CLOSE!", 50, 50);
  }

}