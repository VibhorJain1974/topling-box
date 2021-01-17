class box{ 
    constructor(x,y,width,height)
    {
        this.width=width;
        this.height=height;
        
        var options ={ 
         restitution:0.8   
        }
        this.body=Bodies.rectangle(x,y,this,width,this.height,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;

        push();

        translate(pos.x,pos.y);

        rotate(angle);

        rectMode(CENTRE);
        fill(255);
        rect(0,0,this.width,this.height);

        pop();

    }
 }
