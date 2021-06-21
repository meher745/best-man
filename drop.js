class drop{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.radius=5;
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width),y:random(0,height)});
        }
    }
    display(){
        var pos=this.body.position;
        
            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,5,5);
            pop();
        

    }
}