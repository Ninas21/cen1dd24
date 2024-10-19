function setup() {
  createCanvas(400, 400);
}

function draw() {
  var mySize= 20;
  background(220);
  fill(pmouseX, pmouseY, 255);
  rect(pmouseX, pmouseY,mySize, mySize);
}
