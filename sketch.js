var font;
var balls = [];
var canon;

var points;

var pointsPerClick = 20;
var spawnedPoints = 0;
var totalPoints;

var time = 0;

function preload() {
	font = loadFont('Roboto-Bold.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	//frameRate(60);
	var baseColor = color(200, 50, 50);
	

	points = font.textToPoints('Grattis!', windowWidth / 2 - 250, windowHeight/2, 128, {
		sampleFactor: 0.1,
	} );
	totalPoints = points.length;


	canon = new Canon(windowWidth/2, windowHeight-100);

}

function draw() {
	time += 0.01;
	background(51,51,51,100);
	for (let i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].draw();
	}



	//ellipse(mouseX, mouseY, 32, 32);
}

function mouseClicked(fxn) {
	if (spawnedPoints + pointsPerClick < totalPoints) {
		for (i = 0; i < pointsPerClick; i++) {
			const pt = points[spawnedPoints];
			var randomColor = 'rgb('+floor(random(100,240)) + "," + floor(random(100,240)) + "," + floor(random(100,240)) + ")";
			var ball = new Ball(mouseX, mouseY, pt.x, pt.y, randomColor);
			balls.push(ball);
			spawnedPoints += 1;
		}
	} else if (totalPoints - spawnedPoints > 0) {
		var pointsLeft = totalPoints - spawnedPoints;
		for (i = 0; i < pointsLeft; i++) {
			const pt = points[spawnedPoints];
			var randomColor = 'rgb('+floor(random(100,240)) + "," + floor(random(100,240)) + "," + floor(random(100,240)) + ")";
			var ball = new Ball(mouseX, mouseY, pt.x, pt.y, randomColor);
			balls.push(ball);
			spawnedPoints += 1;
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}