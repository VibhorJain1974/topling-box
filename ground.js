class ground{ 
    constructor(x,y,w,h)
    {
        this.width=w;
        this.height=h;
        
        var options ={ 
         isStatic:true   
        }
        this.body=Bodies.rectangle(x,y,this,width,this.height,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill(0);

        rect(pos.x,pos,y,this.width,this.height);
    }
 }