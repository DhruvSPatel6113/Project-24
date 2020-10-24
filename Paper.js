class Paper{
    constructor(x,y,radius){

       var options={
            isStatic:false,
            restitution:0.4,
            friction:0.3,
            density:1.2
        }
        this.body=Matter.Bodies.circle(20,500,15,options);
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;

        ellipseMode(CENTER);
        stroke(0);
        fill("purple");
        ellipse(pos.x,pos.y,15);
        
    }

}