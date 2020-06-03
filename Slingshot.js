class SlingShot{
    constructor(bodyA,point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 35
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB=point;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        pointB.y=300
        strokeWeight(5);
        stroke(246,230,188)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    
    }

    fly(){
        this.sling.bodyA=null;

    }
    
}