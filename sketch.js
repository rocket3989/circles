var t = 0;
var circles = [];
function preload(){
	//fontVector = loadFont("./libraries/Vectorb.ttf");
}
function setup() {
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	stroke(255);
	noFill();
	var network = [];
	var length = 4;
	var width = 4;
	var radi = 200;
	var spacing = 90;
	var offset = 150;
	for (i=1;i<(length*width);i++)
		network.push(i);
	for (i = 0;i<length;i++){
		for (j=0;j<width;j++){
			circles.push(new circle(spacing+spacing*j+offset,spacing+spacing*i+offset,radi,0,0.01+.001*j-.002*i,network.slice()));
			network.splice(0,1);
			}
		}
	//console.log(circles[24].network);
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	t++;
	background(0);
	//text(frameRate(),500,500,20,20);
	for (i = 0 ; i < circles.length ; i++){
		circles[i].findPoint();
	}
	for (i = 0 ; i < circles.length ; i++){
		circles[i].show();
	}
}
