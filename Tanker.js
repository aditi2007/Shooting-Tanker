class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    

    
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var angle=this.body.angle;
     
     translate(pos.x,pos.y);
    rotate (angle);
      rectMode(CENTER);
      fill(200);
      rect(0, 0, this.width, this.height);
      
    }
  };
  

