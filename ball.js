class pendulum {
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            //restitution : 0.4,
            //friction : 0.8,
            //density:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        //var pos = this.body.position;
     
        //ellipseMODE(CENTER);
        //fill ("pink");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}