function circle(posX, posY, radius, offset, vel, network){
    
    this.posX = posX;
	this.posY = posY;
	this.radius = radius;
	this.offset = offset;
	this.vel = vel;
	this.pointX = 0;
	this.pointY = 0;
    this.network = network;
    
	this.findPoint = function(){
		this.pointX = cos(this.vel * t + this.offset) * radius + posX;
		this.pointY = sin(this.vel * t + this.offset) * radius + posY;	
	}
    
    this.show = function(){
		// ellipse(this.posX,this.posY,this.radius*2,this.radius*2);
		
		for(j = 0;j<this.network.length;j++){
            neighbor = circles[this.network[j]]
            if ((neighbor.pointX - this.pointX) ** 2 + 
                (neighbor.pointY - this.pointY) ** 2 < 20000)
			    line(this.pointX, this.pointY,
                 neighbor.pointX, neighbor.pointY);
	    }
	}
}