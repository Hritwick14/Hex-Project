let t=0
let x = 0
let y = 0
let radius = 60

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = windowWidth/2
  y = windowHeight/2
}

function draw() {
  background(255)
  stroke("black")
  
  if(mouseIsPressed && (mouseX >= x-radius && mouseX <=x+radius) && (mouseY >= y-radius && mouseY <= y+radius)){
    x = mouseX
    y = mouseY  
    stroke("green")
  }  
  
  beginShape()  
  for(let i = 0,j=30+t;i<6;i++,j+=60){
    vertex(x+(radius*cos(angdeg(j))),y-(radius*sin(angdeg(j)))) 
    fill("red")
    circle(x+(radius*cos(angdeg(j))),y-(radius*sin(angdeg(j))), 10)
    noFill()
  }
  endShape(CLOSE)
  
  fill("green")
  circle(x,y, 10)
  noFill()
  circle(x,y,radius*2)
  
  t=t+1%360
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function angdeg(x){
  return x * PI /180
}
