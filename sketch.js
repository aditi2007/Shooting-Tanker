// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world,ground,tanker,shootingBall,cannonball;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    tanker = Tanker.create();
    world = tanker.world;
    shootingBall = Ball.create();
    world = shootingBall.world;
    cannonball =cannonBall.create();
    world = cannonball.world;
    ground=new Ground(400,10,20,20);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
tanker.display();
shootingBall.display();
cannonball.display();
ground.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}
