function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let x = windowWidth/2
  let y = windowHeight/2
  let radius = 60
  
  beginShape()
  for(let i = 30;i<360;i+=60){
    vertex(x+(radius*cos(angdeg(i))),y-(radius*sin(angdeg(i)))) 
    fill("red")
    circle(x+(radius*cos(angdeg(i))),y+(radius*sin(angdeg(i))), 10)
    noFill()
  }
  endShape(CLOSE)
  
  fill("green")
  circle(x,y, 10)
  noFill()
  circle(x,y,radius*2)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function angdeg(x){
  return x * PI /180
}
