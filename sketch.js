function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let x = windowWidth/2
  let y = windowHeight/2
  let radius = 30
  
  beginShape()
  vertex(x,y-radius)
  vertex(x-(radius*cos(60)),y+(radius*sin(60)))
  vertex(x-(radius*cos(60)),y-(radius*sin(60)))
  vertex(x,y+radius)
  vertex(x+(radius*cos(60)),y-(radius*sin(60)))
  vertex(x+(radius*cos(60)),y+(radius*sin(60)))
  endShape(CLOSE)
  
  fill("green")
  circle(x,y, 10)
  noFill()
  
  fill("red")
  circle(x,y-radius, 10)
  noFill()
  
  // console.log(3,4,5)
  
  circle(x+(radius*cos(60)),y+((radius*sin(60))), 10)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
