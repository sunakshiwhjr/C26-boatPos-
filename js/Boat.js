//do 1 
class Boat
{
    /*
    constructor(x,y,width, height)
    {

        var options=
        {
            restitution:0.8,
            friction:1,
            density:1,
        };

        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('assets/boat.png');
        World.add(myWorld, this.body);

    }
*/


constructor(x,y,width, height)
{

    var options=
    {
        restitution:0.8,
        friction:1,
        density:1,
    };

    this.body = Bodies.rectangle(x,y,width, height, options);
    this.width = width;
    this.height = height;

  //  this.boatPosition = boatPos;
    this.image = loadImage('assets/boat.png');
    World.add(myWorld, this.body);

}
    display()
    {
        /*part 1
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        imageMode(CENTER);
        //physics body will take line 14 and image will take different y pos
        image(this.image,pos.x, pos.y, this.width, this.height);
        
        pop();

        */
       //Part 2
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

       // translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        //physics body will take line 14 and image will take different y pos
        image(this.image,pos.x, pos.y, this.width, this.height);
        
        
        pop();
        
    }
}