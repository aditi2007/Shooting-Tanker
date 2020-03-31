// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground,tanker,canonball,shootball,ball;
/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,100,20,20);
    tanker=new Tanker(100,100,20,20);
    canonball=new CanonBall(450,250,20,20);
    ball=new Ball(370,270,4);
    shootball=new ShootBall(tanker.ball,{x:350,y:250} );

}

function draw() {
// Remember to update the Matter Engine and set the background.
background("yellow");
Engine.update(engine);
strokeWeight(4)
ground.display();
tanker.display();
cannonball.display();
ball.display();
shootball.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    shootball.fly();
}