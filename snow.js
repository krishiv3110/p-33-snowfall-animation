class Snow{
    constructor(x,y,width,height){
        var options = {
            'restitution' :0.4,
            'friction' : 1,
            'density' : 3
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options); 
        this.width = width;
        this.height = height;
        this.image=loadImage("snow4.webp")
     

        World.add(world, this.body);
      //  World.add(world, this.image);
    }
    display(){
       // var pos =this.body.position;
        var angle = this.body.angle;
        push();
      //  translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       // fill("red");
        rect(0, 0, this.width, this.height);
        // World.remove(world, this.body);
        image(this.image, this.body.position.x, this.body.position.y,40, 40);
  
        pop();
   
    }
    
};
