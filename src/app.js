var Pixel = require("./pixel");
var Grid = require('./grid');
var frames = require('./frames');
var constants = require('./constants');

var ColorSet = require('./colorSet');

var red = new ColorSet("red", "#AF352A", 10, 12);
var green = new ColorSet("green", "#6A6A14", 5, 9);
var white = new ColorSet("white", "#E19C35", 9, 6);


var currentFrame = 0;

// new Grid();

function createInitialFrame() {
	var frame = frames[currentFrame];
	red.createPixelsFromFrame(frame.red);
	green.createPixelsFromFrame(frame.green);
	white.createPixelsFromFrame(frame.white);
}

function createFollowingFrames() {
	for (var i = 1; i < frames.length; i++) {
		var frame = frames[i];
		red.createStateFromFrame(frame.red);
		green.createStateFromFrame(frame.green);
		white.createStateFromFrame(frame.white);		
	}
}

function step() {
	red.moveToState(currentFrame);
	white.moveToState(currentFrame);
	green.moveToState(currentFrame);
	currentFrame++;

	if (currentFrame == frames.length) {
		currentFrame = 0;
	}
}

createInitialFrame();
createFollowingFrames();


step();
setInterval(step, constants.interval);

