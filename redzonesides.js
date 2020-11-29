class RedZoneSides{
    constructor(x,y,width,height){
        //static sides
        var options={
            isStatic:true
        }

        //creating side
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        //adding sides to world
        World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}