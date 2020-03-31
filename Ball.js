class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    
    World.add(world, this.body);
  
  }

  display() {
var pos =this.body.position;
var angle=this.body.angle;
translate(pos.x,pos.y);
rotate (angle);
 rectMode(CENTER);
 fill("pink");
 rect(0, 0, this.angle);
  }
}
