let t=0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  
//   let x = windowWidth/2
//   let y = windowHeight/2
  
  let x = mouseX
  let y = mouseY
  let radius = 60
  
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
