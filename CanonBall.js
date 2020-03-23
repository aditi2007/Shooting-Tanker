class CanonBall {
  constructor(x,y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
      
    }
    this.body = Bodies(100, 22, radius, options);
    this.radius=1.5
    this.image=loadImage("sprites/canonBall.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("pink");
    rect(0, 0, this.radius);
  
  }
}
