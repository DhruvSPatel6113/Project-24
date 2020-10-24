class Ground{
    constructor(x,y,width,height){

       var options={
            isStatic:true
        }

        this.body=Matter.Bodies.rectangle(400,600,800,10,options);
        World.add(world,this.body);
        
    }

    display(){

        rectMode(CENTER);
        stroke(0);
        fill(255,255,255);
        rect(400,594,800,10);

    }
}