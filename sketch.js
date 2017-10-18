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
	for (i=1;i<25;i++)
		network.push(i);
	for (i = 0;i<5;i++){
		for (j=0;j<5;j++){
			circles.push(new circle(50+50*j,50+50*i,20,0,0.01+.003*j-.003*i,network.slice()));
			network.splice(0,1);
			
			}
		}
	console.log(circles[24].network);
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	t++;
	background(0);
	text(frameRate(),500,500,20,20);
	for (i = 0 ; i < circles.length ; i++){
		circles[i].findPoint();
	}
	for (i = 0 ; i < circles.length ; i++){
		circles[i].show();
	}
}