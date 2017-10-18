function circle(posx,posy,radius,offset,vel,network){
	this.posx = posx;
	this.posy = posy;
	this.radius = radius;
	this.offset = offset;
	this.vel = vel;
	this.pointx = 0;
	this.pointy = 0;
	this.network = network;
	this.findPoint = function(){
		this.pointx = cos(this.vel*t+this.offset)*radius+posx;
		this.pointy = sin(this.vel*t+this.offset)*radius+posy;	
	}
	this.show = function(){
		ellipse(this.posx,this.posy,this.radius*2,this.radius*2);
		strokeWeight(4);
		point(this.pointx,this.pointy);
		strokeWeight(1);
		for(j = 0;j<this.network.length;j++){
			line(this.pointx,this.pointy,circles[this.network[j]].pointx,circles[this.network[j]].pointy);
	}
	}
}