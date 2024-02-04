function setup() {
  createCanvas(400, 400);
}
function draw() {
  circle(mouseX,mouseY,50)
  // background(220);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
