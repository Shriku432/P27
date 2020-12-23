class Rope{
constructor(bodyA,bodyB), offsetx, OffsetY} 
{

     this.offsetX=offsetX
     this.offset.Y=OffsetY
     var options={
         bodyA:body1
         bodyB:body2
         pointB:{x:this.offsetX, y:this.OffsetY}
}


}

this.rope=Constraint.create(options)
World.add(world,this.Chain)





display(){
var pointA=this.Rope.bodyA.position
var pointB=this.Rope.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)

}

