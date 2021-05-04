class Stone{
	constructor(x,y,width,height)
	{var options = {
		
		'density':10,
		'friction': 5,
		'restitution':1
	  };
	// assign options to the rubber ball
	

		
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(x,y,width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("lightblue");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height);
			pop()
	}

}