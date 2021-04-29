class Ball {
    ellipse(x, y, radius, [options]){ 
     var options = {
      'restitution':1,
   }
       this.body = Bodies.rectangle(x, y, radius, [options]);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
      
       rectMode(CENTER);
       fill("green");
       
       
     }
   };