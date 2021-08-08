const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine, myWorld;

var tower, towerImg, ground, cannon, cannonBallImg;
var backgroundImg;
var boat, boatImg;

//do 2 go to line 114
var balls = [];
var boats = [];

function preload()
{
  towerImg = loadImage("assets/tower.png");
  backgroundImg = loadImage('assets/background.gif');
  cannonBallImg = loadImage('assets/cannonball.png');
  boatImg = loadImage('assets/boat.png')
    
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;


    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1200,
          height: 600,
          wireframes: false
        }
      });
      Render.run(render);

    tower = new Tower(150, 380, 190, 330);

    ground = new Ground(600, height-1, 1200,1);
    angle = -PI/4
    cannon = new Cannon(185, 140, 90, 56,angle);

    //do2
   // boat = new Boat(width-400, height-100,200, 200, -100);
    // boat = new Boat(width-400, height-100,200, 200);
 

   //do 1 : show that in last class we created 1 cannonBall goto line 13
  // cannonBall = new CannonBall(cannon.x, cannon.y, 40);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);

    ground.display();

    //call the showCannonBalls
    for(var i=0; i<balls.length; i++)
    {
      showCannonBalls(balls[i], i);
    }

  
    tower.display();
    cannon.display();

    //do3
   /* Body.setVelocity(boat.body, {
      x:-0.9,
      y:0
    })
    */
   // boat.display();

    showBoats();

    textSize(20)
    text(mouseX + "," + mouseY, mouseX,mouseY);
}


//this is the array --> cannonball 
function showCannonBalls(ball, index)
{
    ball.display();

    //remove the ball once it hits the ground or out of the canvas
    if(ball.body.position.x >= width ||ball.body.position.y >=height -50)
    {
      Matter.World.remove(myWorld, ball.body);
      balls.splice(index,1);
    }
}


function keyPressed()
{
  if(keyCode === DOWN_ARROW)
  {
    
    var cannonBall = new CannonBall(cannon.x +10, cannon.y+10, 40);
    balls.push(cannonBall);
  }
}

function keyReleased()
{
    if(keyCode === DOWN_ARROW)
    {
      
     // cannonBall.shoot();
     
     balls[balls.length -1].shoot();
      
    
    }
}

function showBoats()
{

  //array length --> when there is atleast 1 boat then the creation of 2,3 & 4 boat
  if(boats.length > 0 )
  {

     if(boats.length < 4 && boats[boats.length -1].body.position.x < width-300)
     {
        var position = [height-130, height-200, height-140, height-240];
        var position = random(position);
        var boat = new Boat(width, position, 200, 200);
        boats.push(boat);
     }

      for(var i=0; i<boats.length; i++)
      {
        Body.setVelocity(boats[i].body, {x: -0.9, y:0});
        boats[i].display();

      }
  }

   else{

    var boat = new Boat(width, height-100, 200,200);
    boats.push(boat);
   }
}