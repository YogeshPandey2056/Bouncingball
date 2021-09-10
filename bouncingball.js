var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var paddleWidth = 100;
 var score= 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    fill(0,255,0);
    ellipse(xBall, yBall, diameter, diameter);
    xBall += xBallChange;
    yBall += yBallChange;
    if (xBall < diameter/2 || 
        xBall > windowWidth - 0.5*diameter) {
    xBallChange *= -1;
    }
    if (yBall < diameter/2 ) {
    yBallChange *= -1;
    }
    if (yBall > windowHeight) {
      gameover();
      }
    
    if ((xBall > mouseX &&
      xBall < mouseX + paddleWidth) &&
      (yBall + (diameter/2) >= height-40)) {
      xBallChange *= -1;
      yBallChange *= -1;
      var a=score++;
    }
   
  fill(0,255,0);
  rect(mouseX, height - 40, 100, 30);
  noStroke();
  fill(0,255,0);
  textSize(28);
  text("Score: " + score, 50, 20);

}
function gameover(){
    textAlign(CENTER);
    text("Game Over ", 750, 400);
    textAlign(CENTER);
    text("Score: " + score, 750, 450);
    score=a;
     
}


